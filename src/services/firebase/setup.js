import firebase from 'firebase';
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
  apiKey: "AIzaSyAD_0cDdopSfjCI0iwr0QjQfG7XvzpC51c",
  authDomain: "react-firebase-dee58.firebaseapp.com",
  databaseURL: "https://react-firebase-dee58.firebaseio.com",
  projectId: "react-firebase-dee58",
  storageBucket: "react-firebase-dee58.appspot.com",
  messagingSenderId: "1092295371626",
  appId: "1:1092295371626:web:afb9762d1e87195b"
};

const uiConfig = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //firebase.auth.GithubAuthProvider.PROVIDER_ID
  ],
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true,
});

export const startUi = (elementId) => {
  const ui = new firebaseui.auth.AuthUI(auth);
  ui.start(elementId, uiConfig);
};