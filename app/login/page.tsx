"use client";
import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
//component
import Button from "../components/button/Button";
//next js
import { useRouter } from "next/navigation";
// firebase
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  /*  useEffect(
    function () {
      if (!isAuthenticated)  router.push('/register'););
    },
    [isAuthenticated, navigate]
  ); */

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

  function handelSubmit(e: any) {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        router.push("/appLayout");
        // ...
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  }

  return (
    <main className={styles.login}>
      <h2>Login</h2>
      <form className={styles.form} onSubmit={handelSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Log in</Button>
        </div>
      </form>
    </main>
  );
};

export default Login;
