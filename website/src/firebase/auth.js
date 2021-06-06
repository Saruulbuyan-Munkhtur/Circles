import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import { getFirebase } from "./firebase";


const firebaseInstance = getFirebase();

export const login = () => {
  auth.signInWithEmailAndPassword('test@test.com', 'password');
};
export const logout = () => {
  auth.signOut();
};


export const CurrentUser = () => {
  const [user, loading, error] = useAuthState(auth);
  
  if (loading) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (user) {
    return (
      <div>
        <p>Current User: {user.email}</p>
        <button onClick={logout}>Log out</button>
      </div>
    );
  }
  return <button onClick={login}>Log in</button>;
};

export const signOut = async () => {
    try {
      if (firebaseInstance) {
        await firebaseInstance.auth().signOut();
        alert("Successfully signed out!");
      }
    } catch (error) {
      console.log("error", error);
    }
};