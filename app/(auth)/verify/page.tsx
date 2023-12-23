import React from "react";
import styles from "./verify.module.css";

const Verify = () => {
  return (
    <main className={styles.app}>
      <h1>Thanks for registering with us</h1>
      <p className={styles.description}>
        Before logging to your account, you need to verify your email.
      </p>
    </main>
  );
};

export default Verify;
