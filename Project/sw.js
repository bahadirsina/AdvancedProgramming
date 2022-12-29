const CACHE ='Project'
const FILES = [['All flags.png','cross.png','flag icon.png','flag icon5.png','info icon -5.png','tik.png','style.css','flagq.html','manifest.json','sw.js','./']]
function installCB(e) {
  e.waitUntil(
    caches.open(CACHE)
    .then(cache => cache.addAll(FILES))
    .catch(console.log)
  )
}
self.addEventListener('install', installCB)
function cacheCB(e) { //cache first
    let req = e.request
    e.respondWith(
      caches.match(req)
      .then(r1 => r1 || fetch(req))
      .catch(console.log)
    )
  }
  self.addEventListener('fetch', cacheCB)