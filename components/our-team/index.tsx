import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Linkedin from "@/svgs/linkedin";

const OurTeam = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>Meet our team</h2>
          <p>A team of dynamic, highly qualified and skilled individuals with a desire to solve problems</p>
        </div>
        <div className={styles.body}>
          <div className={styles.single}>
            <Image src="/images/team.png" width={384} height={408} alt="Single Team" />
            <div className={styles.caption}>
              <div>
                <h2>Mr Chris Mboho</h2>
                <p>Co-Founder & CEO</p>
              </div>
              <Linkedin />
            </div>
          </div>
          <div className={styles.single}>
            <Image src="/images/team.png" width={384} height={408} alt="Single Team" />
            <div className={styles.caption}>
              <div>
                <h2>Mr Tega Ajor</h2>
                <p>Co-Founder & CTO</p>
              </div>
              <Linkedin />
            </div>
          </div>
          <div className={styles.single}>
            <Image src="/images/team.png" width={384} height={408} alt="Single Team" />
            <div className={styles.caption}>
              <div>
                <h2>Mr Chris Mboho</h2>
                <p>Co-Founder & CEO</p>
              </div>
              <Linkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
