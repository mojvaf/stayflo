"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./login.module.css";
//component
import Button from "../../components/button/Button";
//next js
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import useCheckAuth from "@/hooks/UseCheckAuth";
import LoadingFullScreen from "@/app/components/loadingFullScreen/LoadingFullScreen";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  // TODO: Please create a custom hook that checks if the user is already logged in
  // For that use supabase.auth.onAuthStateChange() function
  // If the user is already logged then forward the user to homepage

  const subabase = useRef(createClientComponentClient());

  const { loadingFull } = useCheckAuth();

  const handelSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ): Promise<void> => {
    // TODO: Please show a loading spinner while the request is processing
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await subabase.current.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (error) {
      setError(error.message);
    }

    if (!error) {
      // TODO: replace this route with something that makes sense, like "home" or "dashboard"
      router.push("/dashboard");
    }
  };
  if (loadingFull) return <LoadingFullScreen />;

  return (
    <main className={styles.login}>
      <h2>Login</h2>
      <form
        className={styles.form}
        onSubmit={(e) => handelSubmit(e, email, password)}
      >
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
          <Button type="primary" loading={loading}>
            Log in
          </Button>
        </div>
      </form>
      {error && <div className={styles.error}>{error}</div>}
    </main>
  );
};

export default Login;
