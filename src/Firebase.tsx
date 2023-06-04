// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREASE_APP_ID,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;
