import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Footer = () => {
  const date = new Date();
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <div className={styles.first}>
          <div className={styles.firstHead}>
            <p>Connect</p>
            <h2>Sign Up for Our Newsletter </h2>
          </div>
          <div className={styles.subscribeContainer}>
            <input type="text" placeholder="example@email.com" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className={styles.contact}>
          <h3>Contact us</h3>
          <div className={styles.contactBody}>
            <div className={styles.contactAddress}>
              <p>6, Akintola street, off Ade road, Port Harcourt, Nigeria.</p>
              <h4>Address</h4>
            </div>
            <div className={styles.row}>
              <div className={styles.contactAddress}>
                <p>+49 176 123 456</p>
                <h4>Support Hotline</h4>
              </div>
              <div className={styles.contactAddress}>
                <p>help@brooksmf.com</p>
                <h4>Support email</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.quickLinks}>
          <h2>About Us</h2>
          <Link href="/about">About Us</Link>
          <Link href="/help">Help</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <div className={styles.quickLinks}>
          <h2>Useful Links</h2>
          <Link href="/open">Open Account</Link>
          <Link href="/payments">Payments</Link>
          <Link href="/loans">Loans</Link>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>© Brooks MF {date.getFullYear()}</p>
        <div>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
