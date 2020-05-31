importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js')

firebase.initializeApp{
    messagingSenderId: "507383070115"
}

const initMessaging = firebase.messaging()