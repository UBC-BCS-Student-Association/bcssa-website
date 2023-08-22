import React from 'react'
import Link from 'next/link'
import EventCalendar from './EventCalendar'
import styles from '@/styles/Section.module.css'

export default function Events() {
  return (
    <div id="events" className={styles.container}>
        <p class="text-2xl text-center ...">Events</p>
        <EventCalendar />
        <Link href="/pastEvents">
            <span class="no-underline hover:underline ...">Past Events</span>
        </Link>
    </div>
  )
}
