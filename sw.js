// Service worker mínimo — hoy solo habilita "Agregar a inicio".
// El cacheo real para trabajar offline lo sumamos cuando construyamos
// los formularios (necesita otra lógica: guardar registros pendientes
// y sincronizarlos cuando vuelva la señal).
const CACHE = 'lm-maiz-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // por ahora, red directa (sin cache offline todavía)
});
