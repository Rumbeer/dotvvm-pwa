importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
    console.log('Yay! Workbox is loaded 🎉');
} else {
    console.log("Boo! Workbox didn't load 😬");
}
const oneDayExpirationPlugin = new workbox.expiration.ExpirationPlugin({ maxAgeSeconds: 24 * 60 * 60 });
const thirtyDaysExpirationPlugin = new workbox.expiration.ExpirationPlugin({ maxAgeSeconds: 24 * 60 * 60 * 30 });

const strategyStaleWhileRevalidate = new workbox.strategies.NetworkFirst({
    cacheName: 'test',
    plugins: [oneDayExpirationPlugin]
});

workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|webp|svg)$/, strategyStaleWhileRevalidate);
workbox.routing.registerRoute(/\.(?:js|css)$/, strategyStaleWhileRevalidate);
workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, strategyStaleWhileRevalidate);
workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, strategyStaleWhileRevalidate);

const networkOnlyStrategy = new workbox.strategies.NetworkOnly();

workbox.routing.registerRoute(/https:\/\/localhost:44314\/$/, strategyStaleWhileRevalidate);
workbox.routing.registerRoute(/.*\/Authentication\/SignIn.*/, strategyStaleWhileRevalidate);
workbox.routing.registerRoute(/.*\/authentication\/register/, strategyStaleWhileRevalidate);
workbox.routing.registerRoute(/.*\/chat\/.+?/, strategyStaleWhileRevalidate);
workbox.routing.registerRoute(/.*\/ServiceWorker.js/, strategyStaleWhileRevalidate);
workbox.routing.registerRoute(/.*\/$/, strategyStaleWhileRevalidate);

workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image-cache-first',
    new workbox.strategies.CacheFirst({
        cacheName: 'images',
        plugins: [new workbox.cacheableResponse.CacheableResponsePlugin({ statuses: [200] })]
    }));
workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'images',
        plugins: [new workbox.cacheableResponse.CacheableResponsePlugin({ statuses: [0] })]
    }));
workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new CacheFirst({
        cacheName: 'images'
    }));