import React from 'react'
import { AccordionContainer } from './AccordionContainer'
import styles from '@/styles/Section.module.css'

export default function FAQ() {
  return (
    <div id="faq" className={styles.sectionContainer}>
        <p className={styles.sectionTitle}>FAQ</p>
        <AccordionContainer />
    </div>
  )
}
