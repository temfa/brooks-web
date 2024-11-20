import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroLeft}>
          <div className={styles.heroLeftTop}>
            <div>
              <h3>Digital Banking</h3>
              <h2>Trust us to be your Go-to digital Microfinance Bank</h2>
            </div>
            <p>We offer you a seamless online digital banking experience, with easy access to amazing features on your personal and business accounts. Opening an account today!</p>
            <button>Open Account Now</button>
          </div>
          <div className={styles.fully}>
            <p>Fully Licensed and Insured By</p>
            <Image width={159} height={50} src="/images/ndic.png" alt="NDIC" />
          </div>
        </div>
        <div className={styles.heroRight}>
          <Image width={538} height={714} src="/images/woman.png" alt="Woman" />
          <Image width={336} height={485} src="/images/hero-phone.png" alt="Phone" className={styles.phone} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
