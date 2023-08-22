import React from 'react'
import TabContainer from './TabContainer'
import styles from '@/styles/Section.module.css'

export default function About() {
  return (
    // <div id="about" className="flex flex-col items-center justify-center min-h-screen">
    <div id="about" className={styles.container}>
        <p class="text-2xl text-center ...">About</p>
        <TabContainer />
    </div>
  )
}
