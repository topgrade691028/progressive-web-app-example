const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/img/user1.jpg",
  "/img/user2.jpg",
  "/img/user3.jpg",
  "/img/user4.jpg",
  "/img/user5.jpg",
  "/img/user6.jpg",
  "/img/user7.jpg",
  "/img/user8.jpg",
  "/img/user9.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})