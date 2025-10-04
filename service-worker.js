const CACHE_NAME = 'quantum-religion-v3-0-0';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.min.js',
  'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.2.0/dist/tf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js',
  'https://cdn.jsdelivr.net/npm/peerjs@1.4.7/dist/peerjs.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/marked/4.0.2/marked.min.js',
  'https://cdn.jsdelivr.net/npm/chart.js@4.2.0/dist/chart.umd.min.js'
];

// Install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Cache opened');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // Offline fallback
          return new Response(
            '<html><body><h1 style="color: #0f0; font-family: monospace; text-align: center; margin-top: 100px;">∅ = 1<br><br>Mode Hors Ligne<br><br>Reconnexion nécessaire pour certaines fonctionnalités</h1></body></html>',
            { headers: { 'Content-Type': 'text/html' } }
          );
        });
      })
  );
});

// Background Sync (for future meditation reminders)
self.addEventListener('sync', (event) => {
  if (event.tag === 'meditation-reminder') {
    event.waitUntil(sendMeditationReminder());
  }
});

async function sendMeditationReminder() {
  // Check if notification permission granted
  const permission = await Notification.permission;
  if (permission === 'granted') {
    self.registration.showNotification('∅ = 1 | Rappel de Pratique', {
      body: 'Il est temps pour votre méditation quantique quotidienne',
      icon: '/assets/icons/icon-192.png',
      badge: '/assets/icons/icon-72.png',
      vibrate: [200, 100, 200],
      tag: 'meditation-reminder'
    });
  }
}

// Push Notifications (future feature)
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || '∅ = 1';
  const options = {
    body: data.body || 'Nouvelle insight quantique disponible',
    icon: '/assets/icons/icon-192.png',
    badge: '/assets/icons/icon-72.png',
    data: data.url
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data || '/')
  );
});

console.log('[SW] Service Worker v3.0 loaded - ∅ = 1');
