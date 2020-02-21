/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "ícone_bitcoin.png",
    "revision": "9931c3525f0b3d1d949173523dcb7a6e"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "1177f02136cbdf9725f9e443b19cf26e"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "63184c6af1626d1cadba2029d0424f2a"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "c634cd426a8afb23c7c5b47e44f68d17"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "5f6adbee0d30bca513b68d914ca2d361"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "c65764c91bc92382123696e50c5cac0a"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "e3c265e96325395d1ff6cc890f8cc6d2"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "cbbf557992bcd11e85f32e23ee8975a5"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "f03f0e5e7e28c9d4c9acf4a337720024"
  },
  {
    "url": "indexBitcoin.html",
    "revision": "784b1e9b64ddfcf0ef8553784b5324f6"
  },
  {
    "url": "manifest.json",
    "revision": "fa456dd7fdec28ad7e719cb1e1b5f19f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');



// Verifica se o workbox foi corretamente carregado.

if (workbox) {

  console.log('Yay! Workbox is loaded ');

} else {

  console.log('Boo! Workbox didnt load');

}



let CACHE_NAME = 'static-v1';



// Ao instalar, faz cache de tudo que está listado abaixo

self.addEventListener('install', function (event) {

  event.waitUntil(

    caches.open(CACHE_NAME).then(function (cache) {

      return cache.addAll([

        /* somente arquivos locais, para serem cacheados */

        '/index.html',

        '/static/js/manifest.json'

      ]);

    })

  )

});



// Ativa o cache

self.addEventListener('activate', function activator(event) {

  event.waitUntil(

    caches.keys().then(function (keys) {

      return Promise.all(keys

        .filter(function (key) {

          return key.indexOf(CACHE_NAME) !== 0;

        })

        .map(function (key) {

          return caches.delete(key);

        })

      );

    })

  );

});



// Tenta encontrar. Toma ações caso encontre ou não o recurso

self.addEventListener('fetch', function (event) {

  event.respondWith(

    caches.match(event.request).then(function (cachedResponse) {

      return cachedResponse || fetch(event.request);

    })

  );

});



// ESTRATÉGIAS DE CACHE



// STALE WHILE REVALIDATE

// Obsoletar quando encontrado

workbox.routing.registerRoute(

  /\.(?:js|css)$/,

  workbox.strategies.staleWhileRevalidate({

    cacheName: 'static-resources',

  })

);