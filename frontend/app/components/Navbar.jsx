// components/Navbar.js
"use client";
import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import {NavLink} from 'react-router-dom'
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  // const router = useRouter();
  // const currentRoute = router.pathname
  const pathname = usePathname();

  useEffect(() => {
    let navLinks = document.querySelector(`.${styles.navLinks}`);
    let menuOpenBtn = document.querySelector(`.${styles.bxMenu}`);
    let menuCloseBtn = document.querySelector(`.${styles.sidebarLogo}`);

    const openMenu = () => {
      navLinks.style.left = "0";
    };

    // const closeMenu = (event) => {
    //     navLinks.style.left = "-100%";
    // };
    const closeMenu = (event) => {
      if (event.target && event.target.classList.contains('bx-x')) {
        navLinks.style.left = "-100%";
      }
    };

    menuOpenBtn.addEventListener("click", openMenu);
    menuCloseBtn.addEventListener("click", closeMenu);

    return () => {
      menuOpenBtn.removeEventListener("click", openMenu);
        menuCloseBtn.removeEventListener("click", closeMenu);
    };
  }, []);

  

  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <img className={styles.bxMenu} src="/navbar/hamburgermenu.svg" alt="hamburgermenu" />
        <div>
          <Link href="/">
            <Image className={styles.logo} width={200} height={475} quality={70} layout="responsive" sizes="(max-width:1200px) 160px,200px" priority={true} src="/homelogo.png" alt="EvrenAi logo" />
          </Link>
        </div>
        <div className={styles.navLinks}>
          <div className={styles.sidebarLogo}>
            <span>
            <Image className={styles.logo} width={200} height={475} quality={70} layout="responsive" sizes="(max-width:1200px) 180px,200px" priority={true} src="/homelogo.png" alt="EvrenAi logo" />
            </span>
            <img src="/navbar/cross.svg" className={`bx-x ${styles.bxX}`} alt="close sidebarmenu" />
          </div>
          <ul className={styles.links}>
            <li className={styles.list}>
              <Link href="/" key="/" className={`${styles.outer} ${
              "/" === pathname ? styles.activeclr:""}`}>
                Home
              </Link>
            </li>
            <li className={styles.list}>
              <Link href="/about" key="/about" className={`${styles.outer} ${
              "/about" === pathname ? styles.activeclr:""}`}>
                About
              </Link>
            </li>
            <li className={styles.list}>
             <span className={styles.outer}>
              Service
             </span>
              <img
                className={`${styles.arrow} ${styles.jsarrow}`}
                src="/navbar/dropdownarrow.svg"
                alt="dropdown arrrow sub services"
              />
              <ul className={`${styles.subMenu} ${styles.jssubMenu}`}>
                <li className={`${styles.subMenulist} ${styles.list}`}>
                  <Link href="/service1" className={styles.inner}>
                    Custom AI Solution Development
                  </Link>
                </li>
                <li className={`${styles.subMenulist} ${styles.list}`}>
                  <Link href="/service2" className={styles.inner}>
                    AI-Based Security Solutions
                  </Link>
                </li>
                <li className={`${styles.subMenulist} ${styles.list}`}>
                  <a href="#" className={styles.inner}>
                    Research and Development in AI
                  </a>
                </li>
                <li className={`${styles.subMenulist} ${styles.list}`}>
                  <a href="#" className={styles.inner}>
                    AI in Healthcare
                  </a>
                </li>
                <li className={`${styles.subMenulist} ${styles.list}`}>
                  <a href="#" className={styles.inner}>
                    Advanced Analytics and Data Science
                  </a>
                </li>
                <li className={`${styles.subMenulist} ${styles.list}`}>
                  <a href="#" className={styles.inner}>
                    AI Solutions for Business Process Automation
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.list}>
              <Link href="/casestudy" className={`${styles.outer} ${
              "/casestudy" === pathname ? styles.activeclr:""}`}>
                Case Studies
              </Link>
            </li>
            <li className={styles.list}>
              <Link href="/blog" className={`${styles.outer} ${
              "/blog" === pathname ? styles.activeclr:""}`}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.button}>
        <Button content="Book a call"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
