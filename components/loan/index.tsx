import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const Loans = () => {
  return (
    <div className={styles.loansContainer}>
      <Image src="/images/loan-phone.png" width={299} height={597} alt="LoanPhone" />
      <div className={styles.side}>
        <div>
          <h3>Get Loans</h3>
          <h2>We’re here during your raining days</h2>
          <p>Are you in need of a loan? You are in the right place. Apply and get your disbursement now. </p>
        </div>
        <Link href="/start">Start now</Link>
      </div>
    </div>
  );
};

export default Loans;
