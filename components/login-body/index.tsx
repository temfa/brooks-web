import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const LoginBody = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Log in to Brooks MF</h2>
        <div className={styles.group}>
          <label htmlFor="accountNumber">Account Number</label>
          <input type="text" placeholder="2124567869" />
        </div>
        <div className={styles.group}>
          <label htmlFor="password">Password</label>
          <div>
            <input type="password" placeholder="*************" />
          </div>
          <p>
            Forgot Password? <Link href="/forgot-pasword">Reset</Link>
          </p>
        </div>
        <button>Log in</button>
        <div className={styles.line}></div>
      </div>
      <p>
        Don&lsquo;t have account? <Link href="/register">Sign Up</Link>
      </p>
    </div>
  );
};

export default LoginBody;
