import React from "react";
import styles from "./styles.module.css";
import { servicesData } from "@/utils/data";

const OurServices = () => {
  return (
    <div className={styles.ourServicesContainer}>
      <div className={styles.ourServicesHeader}>
        <h3>Our Services</h3>
        <h2>Amazing ways to enjoy your digital banking experience</h2>
        <p>
          With Brooks Microfinance Bank, you’ll have access to the right financial services at your fingertips. From anywhere, at any time, you can check your account balance,
          transfer funds, pay bills, and more. Our user-friendly app makes managing your money quick and easy.
        </p>
      </div>
      <div className={styles.ourServicesBody}>
        {servicesData?.map((item, index) => {
          const title = item.title.split(" ");
          return (
            <div className={styles.ourServicesSingle} key={index}>
              {item.icon}
              <div>
                <h2>
                  {title[0]} <br /> {title.slice(1, title.length).join(" ")}
                </h2>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
