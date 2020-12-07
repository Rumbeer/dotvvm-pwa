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
