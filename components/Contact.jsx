import React from 'react'
import ContactForm from './ContactForm'
import styles from '@/styles/Section.module.css'

export default function Contact() {
  return (
    <div id="contact" className={styles.sectionContainer}>
      <p className={styles.sectionTitle}>Contact</p>
      <p className={styles.sectionDescrioption}>
        Interested in sponsorship or want to get in touch?
      </p>
      <div className={styles.sectionContent}>
        <ContactForm />
      </div>
    </div>
  )
}
