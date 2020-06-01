importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../firebase-messaging-sw.js')
      .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }
firebase.initializeApp({
    apiKey: "AIzaSyB00E4x0WULQDe3pb8seK4dUtVgV2wNOWo",
    authDomain: "webnotification-7c771.firebaseapp.com",
    databaseURL: "https://webnotification-7c771.firebaseio.com",
    projectId: "webnotification-7c771",
    storageBucket: "webnotification-7c771.appspot.com",
    messagingSenderId: "1072043058532",
    appId: "1:1072043058532:web:eed16765c6a26b4ad9c671",
    measurementId: "G-C5NBPMEYFJ"
})

const initMessaging = firebase.messaging()