ko.bindingHandlers["dotvvm-pwa-offlineHandler"] = {
    init: function (element) {


        registerOnlinePageLoad(element);
        registerOfflinePageLoad(element);

        function registerOnlinePageLoad(element) {
            const onlinePageLoad = new Event('onlinepageload');
            const eventHandler = Function(element.getAttribute("onlinepageload"));
            element.addEventListener('onlinepageload',
                function(event) {
                    eventHandler.call(element);
                },
                false);
            if (navigator.onLine) {
                element.dispatchEvent(onlinePageLoad);
            }
        }

        function registerOfflinePageLoad(element) {
            const offlinePageLoad = new Event('offlinepageload');
            const eventHandler = Function(element.getAttribute("offlinepageload"));
            element.addEventListener('offlinepageload',
                function(event) {
                    eventHandler.call(element);
                },
                false);
            if (!navigator.onLine) {
                element.dispatchEvent(offlinePageLoad);
            }
        }
    }
}

dotvvm.events.error.subscribe(function (e) {
    console.log(e);
    e.handled = true;
});

//dotvvm.events.init.subscribe(triggerOfflineHandlerLoadEvents);

//function triggerOfflineHandlerLoadEvents() {
//    const offlineHandlers = document.querySelectorAll(".dotvvm__pwa__offline-handler");
//    registerOnlinePageLoad(offlineHandlers);
//    registerOnlinePageLoad(offlineHandlers);
//}

//function registerOnlinePageLoad(offlineHandlers) {
//    const onlinePageLoad = new Event('onlinepageload');
//    offlineHandlers.forEach(offlineHandler => {
//        const eventHandler = Function(offlineHandler.getAttribute("onlinepageload"));
//        offlineHandler.addEventListener('onlinepageload', function (event) {
//            eventHandler.call(offlineHandler);
//        }, false);
//        if (navigator.onLine) {
//            offlineHandler.dispatchEvent(onlinePageLoad);
//        }
//    });
//}

//function registerOfflinePageLoad(offlineHandlers) {
//    const offlinePageLoad = new Event('offlinepageload');
//    offlineHandlers.forEach(offlineHandler => {
//        const eventHandler = Function(offlineHandler.getAttribute("offlinepageload"));
//        offlineHandler.addEventListener('offlinepageload',
//            function(event) {
//                eventHandler.call(offlineHandler);
//            },
//            false);
//        if (!navigator.onLine) {
//            offlineHandler.dispatchEvent(offlinePageLoad);
//        }
//    });
//}