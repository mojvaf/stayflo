import React from "react";
import Image from "next/image";
import loadingIcon from "./loading.png";
import styles from "./loading.module.css";

const loading = () => {
  return <Image src={loadingIcon} alt="icon" className={styles.icon} />;
};

export default loading;
