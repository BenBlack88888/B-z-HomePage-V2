importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0e35f70dbe5f30f8b55c.js",
    "revision": "f489c5557a75a0c17e8e24f17ec881d6"
  },
  {
    "url": "/_nuxt/25cad413d3215431f030.js",
    "revision": "6e29c23c5a8c29a3c8affcf9fca45ee2"
  },
  {
    "url": "/_nuxt/3aa308847e8414543a12.js",
    "revision": "cc8d3c3ec877bd69c626e4487d75269d"
  },
  {
    "url": "/_nuxt/553302cd559630edf3d0.js",
    "revision": "6a8f8e6c6ac8a2ee513d1bd40f84e9ac"
  },
  {
    "url": "/_nuxt/5c7ebcb1fdef44165098.js",
    "revision": "12bcdad715c906473cc175ae47ee3a62"
  },
  {
    "url": "/_nuxt/614f3a19154b1b8f5715.js",
    "revision": "3bbbec242c26304cd0ee2418abacd6f8"
  },
  {
    "url": "/_nuxt/6842012c629529c21513.js",
    "revision": "db076c9a4b70f75aa6d8271ccfa870f6"
  },
  {
    "url": "/_nuxt/75ffc39c215f41ecf98e.js",
    "revision": "61f66ead6a12c8e8f3deaf2a0fa1abc9"
  },
  {
    "url": "/_nuxt/908357fd4676a4641d4e.js",
    "revision": "2f675a688f49bee50898a3d7f31a7953"
  },
  {
    "url": "/_nuxt/976082f07ed20f7a0c4f.js",
    "revision": "bc6d9780f4235542d039d829d797ddaf"
  },
  {
    "url": "/_nuxt/9c765fe371986bd3275d.js",
    "revision": "33d891d86c7541c3583f79ef2727f111"
  },
  {
    "url": "/_nuxt/b1136cf659166ed942d6.js",
    "revision": "5a28cae03e5495e8b4f57fd188d31e7b"
  },
  {
    "url": "/_nuxt/b7c5d89dee9fdc306570.js",
    "revision": "3f7e5dde27a86ca181369e68af9dbd31"
  },
  {
    "url": "/_nuxt/bfb5f8d38684ad11b10d.js",
    "revision": "40a650a473704dc79ef0bca5200aa39d"
  },
  {
    "url": "/_nuxt/df5dae19c23fa03b87fb.js",
    "revision": "20eb0d920ab8b98a8999834842c24209"
  },
  {
    "url": "/_nuxt/f78861012836710ab70f.js",
    "revision": "c995a7e68c07a8f074c891d9041b1878"
  },
  {
    "url": "/_nuxt/f9193097fdeaf9e284e7.js",
    "revision": "69d7459c988c2ffaa9ede61547f161ea"
  }
], {
  "cacheId": "site",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
