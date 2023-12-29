import React from "react";
import styles from "./loadingFullScreen.module.css";

const LoadingFullScreen = () => {
  return (
    <div className={styles.loading}>
      <h2>Loading...</h2>
    </div>
  );
};

export default LoadingFullScreen;
