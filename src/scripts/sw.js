import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// Caching the listed asset below
const assetsToCache = [
  './',
  './images/icon/icon.png',
  './images/icon/icon192.png',
  './images/heros/hero-images_1.jpg',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
