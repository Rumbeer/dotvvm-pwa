/// <reference path="../../resources/typings/businesspack.d.ts" />
import * as signalR from "@microsoft/signalr";

namespace EmsControls {
    import Utils = DotVVM.BusinessPack.Utils;

    "use strict";

    class HubConnection {
        private groupName: string;
        private isFirstConnect = true;

        public hub: signalR.HubConnection;
        public isConnected: KnockoutObservable<boolean>;

        private constructor(groupName: string) {
            this.groupName = groupName;
            this.hub = this.createHub();
            this.isConnected = ko.observable(false);
        }

        private createHub() {
            return new signalR.HubConnectionBuilder().withUrl("/mediator-hub").build();
        }

        static async createConnection(groupName: string) {
            let connection = new HubConnection(groupName);
            connection.hub.onclose(connection.onDisconnect.bind(connection));
            await connection.connect();

            return connection;
        }

        private async connect() {
            try {
                await this.hub.start();
                this.onConnected();
            } catch (e) {
                console.error('mediator-hub connection failed. Trying reconnect');
                console.error(e);
                this.hub = this.createHub();
                this.isConnected(false);
                setTimeout(async () => { await this.connect(); }, 5000);
            }
        }

        private async onConnected() {
            await this.connectToRoom();
            this.isConnected(true);
            if (this.isFirstConnect) {
                this.isFirstConnect = false;
            } else {
                this.onReconnect();
            }
        }

        private async connectToRoom() {
            await this.hub.invoke("joinToGroup", this.groupName);
        }

        onDisconnect() {
            this.isConnected(false);
            return this.connect();
        }

        private reconnectListeners: (() => void)[] = [];

        public addReconnectListener(cb: () => void) {
            this.reconnectListeners.push(cb);
        }
        public removeReconnectListener(cb: () => void) {
            this.reconnectListeners = this.reconnectListeners.filter((el) => el !== cb);
        }

        public onReconnect() {
            for (let subscriber of this.reconnectListeners) {
                subscriber();
            }
        }
    }

    class HubConnectionManager {
        private connections: { [id: string]: HubConnection; } = {};
        private static instance = new HubConnectionManager();
        private static lock = false;

        private constructor() { }

        public static get connections() {
            return this.instance;
        }

        async getConnection(groupName: string): Promise<HubConnection> {
            try {
                while (HubConnectionManager.lock) {
                    await this.delay(100);
                }
                HubConnectionManager.lock = true;
                let connection = this.connections[groupName];
                if (!connection) {
                    connection = await HubConnection.createConnection(groupName);
                    this.connections[groupName] = connection;
                }
                HubConnectionManager.lock = false;
                return connection;
            } catch (e) {
                HubConnectionManager.lock = false;
                console.error(e);
                throw e;
            }
        }

        delay(ms: number) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }


    export interface MediatorBinding extends DotVVM.BusinessPack.Controls.ControlBinding {
        methodName: string;
        groupName: KnockoutObservableOr<string>;
        isConnected: KnockoutObservable<boolean>;
        runCommandOnReconnect: KnockoutObservableOr<boolean>;
        command(): Promise<void>;
    }

    export class Mediator extends DotVVM.BusinessPack.Controls.ControlBase<MediatorBinding> {
        connection: HubConnection;
        isConnectedSubscription: KnockoutSubscription;
        onMethodReceiveDelegate: () => void;
        onReconnectDelegate: () => void;
        async initialize() {
            super.initialize();

            this.onMethodReceiveDelegate = this.onMethodReceive.bind(this);
            this.onReconnectDelegate = this.onReconnect.bind(this);

            if (!this.binding.isConnected) {
                this.binding.isConnected = ko.observable<boolean>();
            }

            if (this.binding.groupName) {
                if (ko.isObservable(this.binding.groupName)) {
                    (<KnockoutObservable<string>>this.binding.groupName).subscribe(this.onGroupNameChange.bind(this));
                }

                await this.initializeConnection();
            }
        }

        onGroupNameChange() {
            return this.initializeConnection();
        };

        async initializeConnection() {
            if (this.connection) {
                this.connection.hub.off(this.binding.methodName, this.onMethodReceiveDelegate);
                this.connection.removeReconnectListener(this.onReconnectDelegate);
                this.isConnectedSubscription.dispose();
            }

            let groupName = ko.unwrap(this.binding.groupName);
            this.connection = await HubConnectionManager.connections.getConnection(groupName);
            this.connection.hub.on(this.binding.methodName, this.onMethodReceiveDelegate);
            this.connection.addReconnectListener(this.onReconnectDelegate);
            this.isConnectedSubscription = this.connection.isConnected.subscribe(this.onIsConnectedChanged.bind(this));
        };

        onIsConnectedChanged(value: boolean) {
            this.binding.isConnected(value);
        }

        onMethodReceive() {
            console.log(this.binding.methodName);
            return this.executeCommand();
        }

        async onReconnect() {
            await this.initializeConnection();

            if (ko.unwrap(this.binding.runCommandOnReconnect)) {
                await this.executeCommand();
            }
        }

        private async executeCommand() {
            await this.binding.command();
        }
    }

    Utils.installBindingHandler("Mediator", Mediator);
}