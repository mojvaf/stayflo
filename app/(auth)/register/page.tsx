"use client";
import React, { useEffect, useState } from "react";
import styles from "./register.module.css";
//component
import Button from "../../components/button/Button";

//supabase
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handelSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ): Promise<void> => {
    // TODO: show a "loading" message to user while the function is running
    e.preventDefault();
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
    }
    if (!error) {
      router.push("/verify");
    }
  };

  return (
    <main className={styles.register}>
      <h2>Register</h2>
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
          {/*TODO: Please replace the button with spinner while the submission is processing*/}
          <Button type="submit" className="primary">
            Submit
          </Button>
        </div>
      </form>
      {error && <div className={styles.error}>{error}</div>}
    </main>
  );
};

export default Register;
