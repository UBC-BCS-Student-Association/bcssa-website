import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import EventCalendar from './EventCalendar'
import styles from '@/styles/Section.module.css'
import { Separator } from './ui/separator';

export default function Events() {
  return (
    <div id="events" className={styles.sectionContainer}>
        <p className={styles.sectionTitle}>Events</p>
        <Separator className={styles.sectionSeparator} />
        <div className={styles.sectionContent}>
          <EventCalendar />
          <Link href="/pastEvents">
            <Button className={styles.sectionButton} variant="outline">
              Past Events
            </Button>
          </Link>
        </div>
    </div>
  )
}
