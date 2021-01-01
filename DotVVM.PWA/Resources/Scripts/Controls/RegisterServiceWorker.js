//ko.bindingHandlers["dotvvm-pwa-registerServiceWorker"] = {
//    init: function (element, valueAccessor) {
//        const binding = valueAccessor();
//        if ('serviceWorker' in navigator) {
//            window.addEventListener('load', () => {
//                console.log('Registering service worker');
//                navigator.serviceWorker.register(binding.swPath, { scope: binding.scope });
//            });
//        }
//    }
//}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register("/ServiceWorker.js", { scope: "/" });
    });
}