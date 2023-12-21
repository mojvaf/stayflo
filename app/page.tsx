"use client";
//components
import Navbar from "./components/navbar/Navbar";
//page
import Homepage from "./homepage.tsx/page";
// firebase
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default function Home() {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyCt-Ymj9CqAuN29bwDzyNsLquPW-qB70Eo",
      authDomain: "next-auth-38587.firebaseapp.com",
      projectId: "next-auth-38587",
      storageBucket: "next-auth-38587.appspot.com",
      messagingSenderId: "550615388301",
      appId: "1:550615388301:web:d905a917929b9c387112c4",
      measurementId: "G-KR2B8X63NH",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
  }, []);
  const handelSingUp = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, "nn@gmail.com", "1ASDFG2")
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <main>
      <Navbar />
      <Homepage />
      <button onClick={handelSingUp}>click</button>
    </main>
  );
}
