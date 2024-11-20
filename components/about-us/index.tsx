import React from "react";
import styles from "./styles.module.css";
import { aboutUsData } from "@/utils/data";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>ABOUT US</h1>
        <div>
          <h2>We are here because of You and your needs.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo tellus, metus eget libero gravida nec cursus nulla quisque. Scelerisque viverra non eget in in. Id amet
            libero turpis bibendum viverra donec lectus dictumst ut. Dignissim malesuada sed justo, quam aliquam, tincidunt lectus. Posuere sapien suspendisse felis cras justo
            augue in. A turpis dolor, morbi sagittis nibh sed vitae turpis non. Duis aliquam, volutpat rhoncus venenatis. Pharetra orci pulvinar morbi at in in. Fusce lorem sem
            proin augue mi. Fames nunc at blandit vitae in morbi a. Cursus urna nibh commodo massa dignissim. In adipiscing in gravida aliquet at scelerisque. Augue blandit lectus
            mi amet placerat sagittis et aliquet velit. Hac mi a penatibus massa nisi, rhoncus.
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        {aboutUsData?.map((item, index) => {
          return (
            <div className={styles.single} key={index}>
              {item.icon}
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
