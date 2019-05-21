import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBmxmFbz5w91ss_-MJl5E8_S8CLd0nBODk",
    authDomain: "expensify-c8aa0.firebaseapp.com",
    databaseURL: "https://expensify-c8aa0.firebaseio.com",
    projectId: "expensify-c8aa0",
    storageBucket: "expensify-c8aa0.appspot.com",
    messagingSenderId: "175602419428",
    appId: "1:175602419428:web:d5c46bac0bf81eb7"
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase,googleAuthProvider, database  as default};