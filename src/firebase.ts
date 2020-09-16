import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB6zaC4fzx-_MTJ7CPfzby3KJAvQt76oMs",
  authDomain: "utilitarios-folio-ea3b5.firebaseapp.com",
  databaseURL: "https://utilitarios-folio-ea3b5.firebaseio.com",
  projectId: "utilitarios-folio-ea3b5",
  storageBucket: "utilitarios-folio-ea3b5.appspot.com",
  messagingSenderId: "950136172515",
  appId: "1:950136172515:web:fdf288b3b436f5aafd3ad6",
});

const db = firebase.firestore();

export { db, app };
