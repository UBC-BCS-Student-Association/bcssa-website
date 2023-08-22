import React from 'react'
import ContactForm from './ContactForm'
import styles from '@/styles/Section.module.css'

export default function Contact() {
  return (
    <div id="contact" className={styles.container}>
      <p class="text-2xl text-center ...">Contact</p>
      <ContactForm />
    </div>
  )
}
