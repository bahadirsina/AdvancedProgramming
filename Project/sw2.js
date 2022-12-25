const cacheName = 'CACHE';
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(["./"]);
        })
    );
});
self.addEventListener("activate", e => {
    console.log('Service worker activate event!');
});
self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            if(response){
                return response;
            }
            return fetch(e.request);
        }),
    );
});