import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCfHhO3_hsyrPJbl5v-aeENSgPx51wCHKU",
  authDomain: "clone-5de79.firebaseapp.com",
  projectId: "clone-5de79",
  storageBucket: "clone-5de79.appspot.com",
  messagingSenderId: "1006977385292",
  appId: "1:1006977385292:web:770af9d99779d32764c5e9",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
