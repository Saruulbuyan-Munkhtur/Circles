 
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBYPruf1-a0nQpT6Osyzf3hGGnllrtbKb0",
  authDomain: "crown-41514.firebaseapp.com",
  databaseURL: "https://crown-41514.firebaseio.com",
  projectId: "crown-41514",
  storageBucket: "crown-41514.appspot.com",
  messagingSenderId: "710867145146",
  appId: "1:710867145146:web:b23e274dde17f75e5acd83",
  measurementId: "G-6LV8R7ZWTH" 
};

let instance

instance = firebase.initializeApp(config);

export function getFirebase() {
    if (typeof window !== "undefined") {
        if (instance) return instance
        instance = firebase.initializeApp(config);
        return instance
    }

    return null
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const useruid = auth.currentUser?.uid;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'consent' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
