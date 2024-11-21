import React, { FC, ReactNode } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

const OnboardingLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src="/images/logo-brooks.png" width={152} height={32} alt="Logo" />

        <Image src="/images/woman.png" width={538} height={714} alt="Woman" />
      </div>
      <div className={styles.right}>{children}</div>
    </div>
  );
};

export default OnboardingLayout;
