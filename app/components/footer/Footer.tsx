import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldTravel Inc.
      </p>
    </footer>
  );
};

export default Footer;
