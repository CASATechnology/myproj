import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyBfKNXg9aykgmgWRDVkiAby9uxAsYOqASM",
  authDomain: "anandstudentsin.firebaseapp.com",
  databaseURL: "https://anandstudentsin.firebaseio.com",
  projectId: "anandstudentsin",
  storageBucket: "anandstudentsin.appspot.com",
  messagingSenderId: "582852257240",
};

const devConfig = {
  apiKey: "AIzaSyBfKNXg9aykgmgWRDVkiAby9uxAsYOqASM",
  authDomain: "anandstudentsin.firebaseapp.com",
  databaseURL: "https://anandstudentsin.firebaseio.com",
  projectId: "anandstudentsin",
  storageBucket: "anandstudentsin.appspot.com",
  messagingSenderId: "582852257240",
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};