// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMjanJ-uww7YPHUgbenQlsjgYT7H8MLXc",
  authDomain: "react-js-todo-8f859.firebaseapp.com",
  projectId: "react-js-todo-8f859",
  storageBucket: "react-js-todo-8f859.firebasestorage.app",
  messagingSenderId: "1050234510914",
  appId: "1:1050234510914:web:e42ec09ffcd6e80bedd7db",
  measurementId: "G-N9445CFDHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export const firestoreDb = getFirestore(app);
export default app;