import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from "@/styles/Navbar.module.css";

const NavItem = ({ text, href, active }) => {
  const router = useRouter();

  const handleClick = (e) => {
    if (router.pathname === '/' && href.startsWith("/#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Link href={href} legacyBehavior>
      <a onClick={handleClick} className={`${styles.navLink} ${active ? styles.active : ""}`}>{text}</a>
    </Link>
  );
};

export default NavItem;
