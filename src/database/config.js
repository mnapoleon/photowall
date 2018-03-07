import * as firebase from 'firebase'

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyDQR18rx4ElVwytcaqyQUjBcfPKf_J68PE",
   authDomain: "photowall-1fc23.firebaseapp.com",
   databaseURL: "https://photowall-1fc23.firebaseio.com",
   projectId: "photowall-1fc23",
   storageBucket: "photowall-1fc23.appspot.com",
   messagingSenderId: "376967600186"
 };

firebase.initializeApp(config)

const database = firebase.database()

export {database}
