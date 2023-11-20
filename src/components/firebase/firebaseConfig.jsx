import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCCak0OpBfbCDEUx5z1jFFYuK2JadrTyBs",
  authDomain: "facebook-524b0.firebaseapp.com",
  projectId: "facebook-524b0",
  storageBucket: "facebook-524b0.appspot.com",
  messagingSenderId: "985000254221",
  appId: "1:985000254221:web:fab932611a4cb5bb64ae44",
  measurementId: "G-8GNJY5RG48"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Firestore instance
const database = getFirestore(app);

if (window.location.hostname === 'localhost') {
  // Connect to the Firestore Emulator
  connectFirestoreEmulator(database, 'localhost', 8080);
}

export { database };
