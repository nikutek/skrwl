// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgNlzjp1WjJhN8NtPouDIokE6i0tJpi7A",
  authDomain: "skurwiel-auth.firebaseapp.com",
  projectId: "skurwiel-auth",
  storageBucket: "skurwiel-auth.appspot.com",
  messagingSenderId: "394575329509",
  appId: "1:394575329509:web:730b039cf0dfb32c273c0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;
