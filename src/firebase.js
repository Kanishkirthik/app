import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCgvN5s4ejojbxQ26F2eN-KrAahvW7UOf8",
    authDomain: "gainwithus-817a4.firebaseapp.com",
    projectId: "gainwithus-817a4",
    storageBucket: "gainwithus-817a4.appspot.com",
    messagingSenderId: "957539690071",
    appId: "1:957539690071:web:8ea099994dbac3b55e2512",
    measurementId: "G-SW8PHQ7VXW"
  };
const app=initializeApp(firebaseConfig);
export const auth=app.auth();
export const googleAuthProvider = new app.auth.GoogleAuthProvider();
export default app;  