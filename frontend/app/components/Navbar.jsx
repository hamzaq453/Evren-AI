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
      if (event.target && event.target.classList.contains("bx-x")) {
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
        <Image
          className={styles.bxMenu}
          width={50}
          height={25}
          src="/navbar/hamburgermenu.svg"
          alt="hamburgermenu"
        />
        <div>
          <Link href="/">
            <Image
              className={styles.logo}
              width={200}
              height={475}
              quality={70}
              layout="responsive"
              sizes="(max-width:1200px) 160px,200px"
              priority={true}
              src="/homelogo.png"
              alt="EvrenAi logo"
            />
          </Link>
        </div>
        <div className={styles.navLinks}>
          <div className={styles.sidebarLogo}>
            <span>
              <Image
                className={styles.logo}
                width={200}
                height={475}
                quality={70}
                layout="responsive"
                sizes="(max-width:1200px) 180px,200px"
                priority={true}
                src="/homelogo.png"
                alt="EvrenAi logo"
              />
            </span>
            <Image
              src="/navbar/cross.svg"
              width={50}
              height={25}
              className={`bx-x ${styles.bxX}`}
              alt="close sidebarmenu"
            />
          </div>
          <ul className={styles.links}>
            <li className={styles.list}>
              <Link
                href="/"
                key="/"
                className={`${styles.outer} ${"/" === pathname ? styles.activeclr : ""
                  }`}
              >
                Home
              </Link>
            </li>
            <li className={styles.list}>
              <Link
                href="/about"
                key="/about"
                className={`${styles.outer} ${"/about" === pathname ? styles.activeclr : ""
                  }`}
              >
                About
              </Link>
            </li>
            <li className={styles.list}>
              <span className={styles.outer}>Service</span>
              <Image
                className={`${styles.arrow} ${styles.jsarrow}`}
                src="/navbar/dropdownarrow.svg"
                width={20}
                height={10}
                alt="dropdown arrrow sub services"
              />
              <ul className={`${styles.subMenu} ${styles.jssubMenu}`}>
                <li className={`${styles.subMenulist} ${styles.list}`}>
                  <Link href="/Service1" className={styles.inner}>
                    AI Process Automation
                  </Link>
                </li>
                <li className={`${styles.subMenulist} ${styles.list}`}>
                  <Link href="/Service2" className={styles.inner}>
                    Machine & Deep Learning Solutions
                  </Link>
                </li>
                <li className={`${styles.subMenulist} ${styles.list}`}>
                  <Link href="/Service3" className={styles.inner}>
                    Chatbots
                  </Link>
                </li>
                <li className={`${styles.subMenulist} ${styles.list}`}>
                  <Link href="/Service4" className={styles.inner}>
                    AI Agents
                  </Link>
                </li>
                <li className={`${styles.subMenulist} ${styles.list}`}>
                  <Link href="/Service5" className={styles.inner}>
                    Software Development
                  </Link>
                </li>
                <li className={`${styles.subMenulist} ${styles.list}`}>
                  <Link href="/Service6" className={styles.inner}>
                    Computer Vision
                  </Link>
                </li>
                <li className={`${styles.subMenulist} ${styles.list}`}>
                  <Link href="/Service7" className={styles.inner}>
                    Generative AI
                  </Link>
                </li>
                <li className={`${styles.subMenulist} ${styles.list}`}>
                  <Link href="/Service8" className={styles.inner}>
                    AI Research and Development
                  </Link>
                </li>
              </ul>
            </li>
            <li className={styles.list}>
              <Link
                href="/casestudy"
                className={`${styles.outer} ${"/casestudy" === pathname ? styles.activeclr : ""
                  }`}
              >
                Case Studies
              </Link>
            </li>
            <li className={styles.list}>
              <Link
                href="/blog"
                className={`${styles.outer} ${"/blog" === pathname ? styles.activeclr : ""
                  }`}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.button}>
          <Link href="https://calendly.com/hassan-ali-ai/business-with-the-power-of-ai?month=2024-08&date=2024-08-30" target="_blank">
            <Button content="Book a Call" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
