import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer2() {
  const router = useRouter();

  const navigateTo = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.disclaimer}>
          <h4 className={styles.footerContentTitle}>Disclaimer</h4>
          <p>
            The Bachelor of Computer Science Students Association (BCSSA) is a
            student club for students completing their second degree in the
            Bachelor of Computer Science (BCS) Program at UBC. We are not
            providing information on the BCS program; we are showcasing the BCS
            Student Association and how we enhance student life.
          </p>
        </div>
        <div className={styles.acknowledgment}>
          <h4 className={styles.footerContentTitle}>Land Acknowledgment</h4>
          <p>
            We would like to acknowledge that the land on which we gather is the
            traditional, ancestral, and unceded territory of the xwməθkwəy̓əm
            (Musqueam) People.
          </p>
        </div>
        <div className={styles.social}>
          <h4 className={styles.footerContentTitle}>Follow Us</h4>
          <div className={styles.socialIcons}>
            <FontAwesomeIcon
              icon={faFacebook}
              onClick={() =>
                navigateTo("https://www.facebook.com/groups/ubcbcsclub/")
              }
              className={styles.socialIcon}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              onClick={() =>
                navigateTo("https://www.linkedin.com/groups/14108803/")
              }
              className={styles.socialIcon}
            />
          </div>
        </div>
      </div>
      <p className={styles.copyright}>Copyright &copy; 2023 BCSSA</p>
    </footer>
  );
}
