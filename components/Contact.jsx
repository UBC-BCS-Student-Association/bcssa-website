import React from "react";
import ContactForm from "./ContactForm";
import styles from "@/styles/Section.module.css";
import { Separator } from "./ui/separator";

export default function Contact() {
  return (
    <div id="contact" className={styles.sectionContainer}>
      <p className={styles.sectionTitle}>Contact</p>
      <p className={styles.sectionDescrioption}>
        Interested in sponsorship or want to get in touch?
      </p>
      <Separator className={styles.sectionSeparator} />
      <div className={styles.sectionContent}>
        <ContactForm />
      </div>
    </div>
  );
}
