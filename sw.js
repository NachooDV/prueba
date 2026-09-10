// Service worker mínimo: solo cumple el requisito técnico para que
// el navegador permita "Agregar a pantalla de inicio" en modo standalone.
// No cachea nada agresivamente para no complicarte con ROMs viejas en caché.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Dejamos pasar todo directo a la red (sin caché propio).
  event.respondWith(fetch(event.request));
});
