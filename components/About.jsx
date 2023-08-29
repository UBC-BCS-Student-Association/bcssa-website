import React from 'react'
import TabContainer from './TabContainer'
import styles from '@/styles/Section.module.css'
import { Separator } from "@/components/ui/separator"

export default function About() {
  return (
    // <div id="about" className="flex flex-col items-center justify-center min-h-screen">
    <div id="about" className={styles.sectionContainer}>
        <p className={styles.sectionTitle}>About</p>
        <Separator className={styles.sectionSeparator} />
        <div className={styles.sectionContent}>
          <TabContainer />
        </div>
    </div>
  )
}
