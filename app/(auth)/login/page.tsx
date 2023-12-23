"use client";
import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
//component
import Button from "../../components/button/Button";
//next js
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handelSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ): Promise<void> => {
    e.preventDefault();
    setError("");
    const subabase = createClientComponentClient();
    const { error } = await subabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    }

    if (!error) {
      router.push("/appLayout");
    }
  };

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
          <Button className="btn primary" type="submit">
            Log in
          </Button>
        </div>
      </form>
      {error && <div className={styles.error}>{error}</div>}
    </main>
  );
};

export default Login;
