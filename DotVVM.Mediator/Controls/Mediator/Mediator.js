var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/// <reference path="../../resources/typings/businesspack.d.ts" />
import * as signalR from "@microsoft/signalr";
var EmsControls;
(function (EmsControls) {
    var Utils = DotVVM.BusinessPack.Utils;
    "use strict";
    class HubConnection {
        constructor(groupName) {
            this.isFirstConnect = true;
            this.reconnectListeners = [];
            this.groupName = groupName;
            this.hub = this.createHub();
            this.isConnected = ko.observable(false);
        }
        createHub() {
            return new signalR.HubConnectionBuilder().withUrl("/mediator-hub").build();
        }
        static createConnection(groupName) {
            return __awaiter(this, void 0, void 0, function* () {
                let connection = new HubConnection(groupName);
                connection.hub.onclose(connection.onDisconnect.bind(connection));
                yield connection.connect();
                return connection;
            });
        }
        connect() {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    yield this.hub.start();
                    this.onConnected();
                }
                catch (e) {
                    console.error('mediator-hub connection failed. Trying reconnect');
                    console.error(e);
                    this.hub = this.createHub();
                    this.isConnected(false);
                    setTimeout(() => __awaiter(this, void 0, void 0, function* () { yield this.connect(); }), 5000);
                }
            });
        }
        onConnected() {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.connectToRoom();
                this.isConnected(true);
                if (this.isFirstConnect) {
                    this.isFirstConnect = false;
                }
                else {
                    this.onReconnect();
                }
            });
        }
        connectToRoom() {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.hub.invoke("joinToGroup", this.groupName);
            });
        }
        onDisconnect() {
            this.isConnected(false);
            return this.connect();
        }
        addReconnectListener(cb) {
            this.reconnectListeners.push(cb);
        }
        removeReconnectListener(cb) {
            this.reconnectListeners = this.reconnectListeners.filter((el) => el !== cb);
        }
        onReconnect() {
            for (let subscriber of this.reconnectListeners) {
                subscriber();
            }
        }
    }
    class HubConnectionManager {
        constructor() {
            this.connections = {};
        }
        static get connections() {
            return this.instance;
        }
        getConnection(groupName) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    while (HubConnectionManager.lock) {
                        yield this.delay(100);
                    }
                    HubConnectionManager.lock = true;
                    let connection = this.connections[groupName];
                    if (!connection) {
                        connection = yield HubConnection.createConnection(groupName);
                        this.connections[groupName] = connection;
                    }
                    HubConnectionManager.lock = false;
                    return connection;
                }
                catch (e) {
                    HubConnectionManager.lock = false;
                    console.error(e);
                    throw e;
                }
            });
        }
        delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }
    HubConnectionManager.instance = new HubConnectionManager();
    HubConnectionManager.lock = false;
    class Mediator extends DotVVM.BusinessPack.Controls.ControlBase {
        initialize() {
            const _super = Object.create(null, {
                initialize: { get: () => super.initialize }
            });
            return __awaiter(this, void 0, void 0, function* () {
                _super.initialize.call(this);
                this.onMethodReceiveDelegate = this.onMethodReceive.bind(this);
                this.onReconnectDelegate = this.onReconnect.bind(this);
                if (!this.binding.isConnected) {
                    this.binding.isConnected = ko.observable();
                }
                if (this.binding.groupName) {
                    if (ko.isObservable(this.binding.groupName)) {
                        this.binding.groupName.subscribe(this.onGroupNameChange.bind(this));
                    }
                    yield this.initializeConnection();
                }
            });
        }
        onGroupNameChange() {
            return this.initializeConnection();
        }
        ;
        initializeConnection() {
            return __awaiter(this, void 0, void 0, function* () {
                if (this.connection) {
                    this.connection.hub.off(this.binding.methodName, this.onMethodReceiveDelegate);
                    this.connection.removeReconnectListener(this.onReconnectDelegate);
                    this.isConnectedSubscription.dispose();
                }
                let groupName = ko.unwrap(this.binding.groupName);
                this.connection = yield HubConnectionManager.connections.getConnection(groupName);
                this.connection.hub.on(this.binding.methodName, this.onMethodReceiveDelegate);
                this.connection.addReconnectListener(this.onReconnectDelegate);
                this.isConnectedSubscription = this.connection.isConnected.subscribe(this.onIsConnectedChanged.bind(this));
            });
        }
        ;
        onIsConnectedChanged(value) {
            this.binding.isConnected(value);
        }
        onMethodReceive() {
            console.log(this.binding.methodName);
            return this.executeCommand();
        }
        onReconnect() {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.initializeConnection();
                if (ko.unwrap(this.binding.runCommandOnReconnect)) {
                    yield this.executeCommand();
                }
            });
        }
        executeCommand() {
            return __awaiter(this, void 0, void 0, function* () {
                yield this.binding.command();
            });
        }
    }
    EmsControls.Mediator = Mediator;
    Utils.installBindingHandler("Mediator", Mediator);
})(EmsControls || (EmsControls = {}));
//# sourceMappingURL=Mediator.js.map