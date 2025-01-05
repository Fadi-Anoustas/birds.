// A simple service worker that caches the main page and assets

const CACHE_NAME = "birds-app-cache-v1";
const ASSETS_TO_CACHE = [
  "./",              // Caches your index (root) - adjust if using different start
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
  // Add more assets (images, JS files) that you need offline
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
