self.addEventListener("install", (e) => {
    console.log(e);
    e.waitUntil(
        caches.open("static").then(
            cache => {
                return cache.addAll(["./","./style.css","./flag icon5.png"]);
            }
        )
    )
});

self.addEventListener("fetch", e => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})
