import React from "react";
import styles from "./navbar.module.css";
import Logo from "./icon.png";
//next
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Image src={Logo} alt="Logo" width={70} />
      <ul>
        <li>
          <Link href="/register" className={styles.ctaLink}>
            Register
          </Link>
        </li>
        <li>
          <Link href="/login" className={styles.ctaLink}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
