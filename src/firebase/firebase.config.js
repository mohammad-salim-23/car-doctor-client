// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
// apiKey: "AIzaSyAwKoptNrJa9n8dpCMc57-ks08tD3lAdTk",
//   authDomain: "car-doctor-client-f0b45.firebaseapp.com",
//   projectId: "car-doctor-client-f0b45",
//   storageBucket: "car-doctor-client-f0b45.appspot.com",
//   messagingSenderId: "5802225136",
//   appId: "1:5802225136:web:5118e07a1987fe55460135"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;