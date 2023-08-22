import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import NavItem from "./NavItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MENU_LIST = [
    { text: "Home", href: "/#hero" },
    { text: "About", href: "/#about" },
    { text: "Events", href: "/#events" },
    { text: "Sponsors", href: "/#sponsors" },
    { text: "FAQ", href: "/#faq" },
    { text: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const handleClick = (idx, href) => {
    setActiveIdx(idx);
    setNavActive(false);
    if (href === "/#hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Link href={"/"}>
          <Image src="/logo-simple-cropped.png" alt="Logo" width="150" height="32" />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.menuBar}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={`${navActive ? styles.active : ""} ${styles.menuList}`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => handleClick(idx, menu.href)}
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
