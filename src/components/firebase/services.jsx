import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { database } from "./firebaseConfig"

export const addDocument = async(collectionName,data)=>{
        await addDoc(collection(database,collectionName),{
            ...data,
            createdAt: serverTimestamp(),
    });

   
}

export const addDocs = async(collectionName,data) =>{
    const doc =  await addDoc(collection(database,collectionName),{
        ...data,
        createdAt: serverTimestamp(),
    });

    return doc;
}