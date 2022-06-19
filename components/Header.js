import React from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>ETS Events</a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
