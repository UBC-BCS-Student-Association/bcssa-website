import React from 'react'
import { AccordionContainer } from './AccordionContainer'
import styles from '@/styles/Section.module.css'

export default function FAQ() {
  return (
    <div id="faq" className={styles.container}>
        <p class="text-2xl text-center ...">FAQ</p>
        <AccordionContainer />
    </div>
  )
}
