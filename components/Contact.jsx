import React from 'react'
import ContactForm from './ContactForm'
import styles from '@/styles/Section.module.css'

export default function Contact() {
  return (
    <div id="contact" className={styles.sectionContainer}>
      <p className={styles.sectionTitle}>Contact</p>
      <ContactForm />
    </div>
  )
}
