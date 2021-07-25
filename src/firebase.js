import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBP0WZu3CIjYl0s7MJZJa49Xsrf9RlfbQg",
    authDomain: "fir-3660f.firebaseapp.com",
    projectId: "fir-3660f",
    storageBucket: "fir-3660f.appspot.com",
    messagingSenderId: "329704546015",
    appId: "1:329704546015:web:04b56629fcaeb66552136a",
    measurementId: "G-8RQXYRP6N9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebaseApp.auth();
  const db = firebase.firestore();
  export {auth, db}