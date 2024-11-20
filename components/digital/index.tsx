import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Digital = () => {
  return (
    <div className={styles.digital}>
      <div className={styles.side}>
        <div className={styles.top}>
          <h2>Digital Banking At your fingertip</h2>
          <p>Get our mobile app on any device you use to start Banking with us. Available on App Store or Google Playstore</p>
        </div>
        <div className={styles.row}>
          <Image src="/images/apple-store.png" width={173} height={58} alt="Apple Store" />
          <Image src="/images/google-store.png" width={196} height={58} alt="Google Store" />
        </div>
      </div>
      <Image src="/images/digital-phone.png" width={280} height={563} alt="Digital Phone" />
    </div>
  );
};

export default Digital;
