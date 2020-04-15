import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBw1-HBYaWDdlZsImHeJPwnQhKAYmt7jXQ',
  authDomain: 'crwn-clothing-db-f4ddf.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-db-f4ddf.firebaseio.com',
  projectId: 'crwn-clothing-db-f4ddf',
  storageBucket: 'crwn-clothing-db-f4ddf.appspot.com',
  messagingSenderId: '56125051937',
  appId: '1:56125051937:web:4b38ab30d26ef521',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
