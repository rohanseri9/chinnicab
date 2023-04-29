// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuyozIAMtdzMJkcHa4pieVk7lZ98tJm6I",
  authDomain: "chincabs-8596d.firebaseapp.com",
  projectId: "chincabs-8596d",
  storageBucket: "chincabs-8596d.appspot.com",
  messagingSenderId: "459270802255",
  appId: "1:459270802255:web:04802c15bba7d35bd3d33a"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db};
