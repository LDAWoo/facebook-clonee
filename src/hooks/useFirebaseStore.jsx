import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState, useRef } from "react";
import { database } from '../components/firebase/firebaseConfig';

const useFirebaseStore = (collectionName, condition,by) => {
  const [documents, setDocuments] = useState([]);
  const colNameRef = useRef(collectionName);
  const condRef = useRef(condition);

  useEffect(() => {
    colNameRef.current = collectionName;
  }, [collectionName]);

  useEffect(() => {
    condRef.current = condition;
  }, [condition]);

  useEffect(() => {
    let collectionRef = query(collection(database, colNameRef.current), orderBy(by));
    if (condRef.current) {
      if (!condRef.current.compareValue || !condRef.current.compareValue.length) {
        return;
      }
      collectionRef = query(collectionRef, where(condRef.current.fieldName, condRef.current.operator, condRef.current.compareValue));
    }
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      setDocuments(snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })));
    });

    // clear unmount
    return () => unsubscribe();
  }, []);

  return documents;
};

export default useFirebaseStore;
