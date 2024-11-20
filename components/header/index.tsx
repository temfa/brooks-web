"use client";
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { navbarLinks } from "@/utils/data";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLeft}>
          <div className={styles.headerLogo}>
            <Image src="/images/logo-brooks.png" width={152} height={45} alt="Logo" />
          </div>
          <div className={styles.headerMenu}>
            {navbarLinks?.map((item, index) => {
              return item.dropdown ? (
                <p key={index}>{item.title}</p>
              ) : (
                <Link href={item.url} key={index} className={pathname === item.url ? styles.active : ""}>
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.headerRight}>
          <Link href="/login">Login</Link>
          <button>Get Mobile App</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
