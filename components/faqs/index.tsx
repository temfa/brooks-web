"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import HelpSvg from "@/svgs/help";
import { faqData } from "@/utils/data";

const Faqs = () => {
  const [active, setActive] = useState(-20);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <HelpSvg />
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className={styles.body}>
          {faqData?.map((item, index) => {
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
      </div>
    </div>
  );
};

export default Faqs;
