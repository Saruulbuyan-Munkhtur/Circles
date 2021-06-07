import { db, auth, getFirebase, firestore } from '../utils/firebase';
import { useEffect, useState } from 'react';

export const useDocument = (path) => {
  const [doc, setDoc] = useState(null);
  useEffect(() => {
    firestore.doc(path).onSnapshot((res) => setDoc(res.data()));
  }, [path]);
  const updateRecord = (data) => {
    firestore
      .doc(path)
      .set(
        {
          ...data,
        },
        { merge: true }
      );
  };
  const deleteRecord = () => firestore.doc(path).delete();
  return { doc, updateRecord, deleteRecord };
};

export const useCollection = (path) => {
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(false);
  const createRecord = (data) => {
    firestore.collection(path).add(data);
  };
  const updateRecord = (id, data) => {
    firestore
      .collection(path)
      .doc(id)
      .set({ ...data }, { merge: true });
  };
  const deleteRecord = (id) => {
    return firestore.collection(path).doc(id).delete();
  }

  useEffect(() => {
    setLoading(true);
    if(path) {
      const unsubscribe = firestore
        .collection(path)
        .onSnapshot((querySnapshot) => {
          if (querySnapshot)
            setCollection(querySnapshot.docs.map((doc) => doc.data()));
          else
           setCollection([]);
        });
      return () => unsubscribe();
    }
    setLoading(false);
  }, [path]);

  return { collection, createRecord, updateRecord, deleteRecord, loading};
};

// export const createFriendsList = (userName) => {
//   return db.collection('friendsLists')
//     .add({
//       created: firebase.firestore.FieldValue.serverTimestamp(),
//       users: [{ name: userName}]
//     });
// };

// export const getFriendsList = groceryListId => {
//   return db.collection('friendsLists')
//     .doc(groceryListId)
//     .get();
// };
