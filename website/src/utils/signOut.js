import { auth, getFirebase } from './firebase';

const firebaseInstance = getFirebase();

export const signOut = async () => {
    try {
      if (firebaseInstance) {
        await auth.signOut();
        alert("Successfully signed out!");
      }
    } catch (error) {
      console.log("error", error);
    }
};