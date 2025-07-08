importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBaeSVaAa8RoX_dYW8_YKxY7naw9vq8OX8",
    authDomain: "docepedidoexpress.firebaseapp.com",
    projectId: "docepedidoexpress",
    appId: "1:599415242749:web:e2b4ad85d82aef617ba394"
  };
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: '/logo.png'
    }
  );
});
