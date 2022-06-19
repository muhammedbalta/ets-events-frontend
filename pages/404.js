import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/404.module.css";
function NotFoundPage() {
  return (
    <Layout title="Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h4>There is nothing here</h4>
        <Link href="/">Go Back</Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
