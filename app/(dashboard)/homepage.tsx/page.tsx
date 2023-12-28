import React from "react";
import styles from "./homepage.module.css";
//components
// TODO: this page looks like is redundant
//next
import Link from "next/link";
const HomePage = () => {
  return (
    <main className={styles.homepage}>
      <section>
        <h1>
          You travel the world.
          <br />
          This app keeps track of your adventures.
        </h1>
        <h2>
          The app tracks your footsteps into every city you have been and never
          forget your wonderful experiences.
        </h2>
      </section>
    </main>
  );
};

export default HomePage;
