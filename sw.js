/* Service Worker：讓網頁可安裝成 PWA，並在離線時仍能開啟介面 */
const CACHE = 'gallery-shell-v4';
const SHELL = [
  './',
  'index.html',
  'config.js',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/apple-touch-icon.png',
  'assets/hero.jpg',
  'assets/monogram.png',
  'assets/leaf-tl.png',
  'assets/leaf-bl.png',
  'assets/leaf-br.png',
  'assets/sprig.png'
];
const CDN_HOSTS = ['cdnjs.cloudflare.com'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // 本站檔案：優先連網取得最新版，失敗時才用快取
  if (url.origin === self.location.origin) {
    e.respondWith(
      fetch(req, { cache: 'no-cache' })
        .then((res) => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req).then((hit) => hit || caches.match('index.html')))
    );
    return;
  }

  // 第三方函式庫（JSZip / FileSaver）：快取優先
  if (CDN_HOSTS.includes(url.hostname)) {
    e.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }))
    );
  }
  // 其他來源（雲端圖片）不介入，直接走瀏覽器預設行為
});
