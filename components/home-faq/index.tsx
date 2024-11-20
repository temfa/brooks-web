"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { faqData } from "@/utils/data";

const HomeFaq = () => {
  const [active, setActive] = useState(-20);
  return (
    <div className={styles.homefaqWrapper}>
      <h2>Need Help?</h2>
      <div className={styles.homefaqBody}>
        {faqData?.slice(0, 4)?.map((item, index) => {
          return (
            <div
              className={styles.homefaqSingle}
              key={index}
              onClick={() => {
                if (active === index) setActive(-20);
                else setActive(index);
              }}>
              <div>
                <h3>{item.question}</h3>
                <h3>+</h3>
              </div>
              {active === index ? <p>{item.answer}</p> : null}
            </div>
          );
        })}
      </div>
      <Link href="/faqs">More FAQ</Link>
    </div>
  );
};

export default HomeFaq;
