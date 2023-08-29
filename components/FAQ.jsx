import React from 'react'
import { AccordionContainer } from './AccordionContainer'
import styles from '@/styles/Section.module.css'
import { Separator } from './ui/separator';

export default function FAQ() {
  return (
    <div id="faq" className={styles.sectionContainer}>
        <p className={styles.sectionTitle}>FAQ</p>
        <Separator className={styles.sectionSeparator} />
        <div className={styles.sectionContent}>
          <AccordionContainer />
        </div>
    </div>
  )
}
