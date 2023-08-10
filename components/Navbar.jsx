import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import NavItem from "./NavItem";

const MENU_LIST = [
    { text: "Home", href: "/#hero" },
    { text: "About", href: "/#about" },
    { text: "Events", href: "/#events" },
    { text: "Sponsors", href: "/#sponsors" },
    { text: "FAQ", href: "/#faq" },
    { text: "Contact", href: "/#contact" },
];

// const NavItem = ({ text, href, active }) => {
//   const handleClick = (e) => {
//     if (href.startsWith("/#")) { // Check if the link is an internal anchor
//       e.preventDefault();
//       const targetElement = document.querySelector(href.substring(1));
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   };

//   return (
//     // <a href={href} onClick={handleClick} className={`${styles.navLink} ${active ? styles.active : ""}`}>
//     //   {text}
//     // </a>
//     <Link href={href} legacyBehavior>
//       <a onClick={handleClick} className={`${styles.navLink} ${active ? styles.active : ""}`}>{text}</a>
//     </Link>
//   );
//   // return (
//   //   <Link href={href} legacyBehavior>
//   //     <a className={`${styles.navLink} ${active ? styles.active : ""}`}>{text}</a>
//   //   </Link>
//   // );
// };

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Link href={"/"}>
          <Image src="/logo-simple.png" alt="Logo" width="250" height="64" />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.menuBar}
        >
          <div className={styles.menuBarDiv}></div>
          <div className={styles.menuBarDiv}></div>
          <div className={styles.menuBarDiv}></div>
        </div>
        <div className={`${navActive ? styles.active : ""} ${styles.menuList}`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
