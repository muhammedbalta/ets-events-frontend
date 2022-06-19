import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; ETS Events</p>
      <p>
        <Link href="/about">About this project</Link>
      </p>
    </footer>
  );
}

export default Footer;
