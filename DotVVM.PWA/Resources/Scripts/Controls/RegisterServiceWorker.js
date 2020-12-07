registerServiceWorker();

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            console.log('Registering service worker');
            navigator.serviceWorker.register('/ServiceWorkerTest.js', { scope: '/' });
        });
    }
}