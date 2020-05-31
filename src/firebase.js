import firebase from 'firebase'


var Config = {
    apiKey: "AIzaSyDX3ZSzTmPYdPdl_EVwGoAKAeVInrUdp0A",
    authDomain: "perime-arqui.firebaseapp.com",
    databaseURL: "https://perime-arqui.firebaseio.com",
    projectId: "perime-arqui",
    storageBucket: "perime-arqui.appspot.com",
    messagingSenderId: "507383070115",
    appId: "1:507383070115:web:fb2c8a023b5e3725e42e16"
  };
firebase.initializeApp(Config)

export default firebase