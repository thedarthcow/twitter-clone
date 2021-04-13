import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD_UlSM7ucaeXn3NZoDyZ_p1Ioiz6j3gjg",
    authDomain: "twitter-clone-19ccc.firebaseapp.com",
    projectId: "twitter-clone-19ccc",
    storageBucket: "twitter-clone-19ccc.appspot.com",
    messagingSenderId: "412358832477",
    appId: "1:412358832477:web:1d293cbcc89787ec0ef8b4",
    measurementId: "G-83ZTZLYEM3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;