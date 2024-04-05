import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAm5KyXxZTe_p1FDbc9HPwBYPi8vjTuiQU",
  authDomain: "house-rental-application-cbc79.firebaseapp.com",
  databaseURL: "https://house-rental-application-cbc79-default-rtdb.firebaseio.com",
  projectId: "house-rental-application-cbc79",
  storageBucket: "house-rental-application-cbc79.appspot.com",
  messagingSenderId: "365656222129",
  appId: "1:365656222129:web:e3fdfef389f3eedbcb3590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore();