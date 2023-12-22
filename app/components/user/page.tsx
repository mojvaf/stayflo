import React from "react";
import styles from "./user.module.css";
//next js
import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  function handleClick() {
    /*logout();
    router("/")*/
  }

  return (
    <div className={styles.user}>
      <h3>Welcome to the app!</h3>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default User;

/*{user.name}*/
