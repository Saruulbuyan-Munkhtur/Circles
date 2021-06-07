 
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCLtFQRRyH5CATX50ybTCGKbpuq1ArpO7A",
  authDomain: "achaa-da5fd.firebaseapp.com",
  databaseURL: "https://achaa-da5fd.firebaseio.com",
  projectId: "achaa-da5fd",
  storageBucket: "achaa-da5fd.appspot.com",
  messagingSenderId: "384605836418",
  appId: "1:384605836418:web:575dd11bdf81259a6e109b",
  measurementId: "G-BSHD55VPW9"
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
