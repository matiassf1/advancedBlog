import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBFkE7lqw4vCrWXgseea29LWA_oAHky5-8",
  authDomain: "first-time-firebase-fd134.firebaseapp.com",
  projectId: "first-time-firebase-fd134",
  storageBucket: "first-time-firebase-fd134.appspot.com",
  messagingSenderId: "204009792497",
  appId: "1:204009792497:web:290ed2e00cb575d3161a50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );