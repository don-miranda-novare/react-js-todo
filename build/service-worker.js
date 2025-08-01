import { processSync } from "./process-sync.js";

self.addEventListener('sync', event => {
  if (event.tag === 'profile-sync') {
        event.waitUntil(processSync());
  }
});

self.addEventListener('install', (event) => {
  event.waitUntil(
      console.log('Service Worker Installed')
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
      console.log('Service Worker Activated')
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
      console.log('Service Worker Fetched')
  );
});
