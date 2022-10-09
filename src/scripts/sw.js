import 'regenerator-runtime';
import CacheHelper from './utils/cacheHelper';

const assetsToCache = [
  './',
  './app.webmanifest',
  './index.html',
  './app.bundle.js',
  './sw.bundle.js',
  './images/heros/hero-image_1.jpg',
  './images/icon/icon.png',

];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));

  // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());

  // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
  // TODO: Add/get fetch request to/from caches
});
