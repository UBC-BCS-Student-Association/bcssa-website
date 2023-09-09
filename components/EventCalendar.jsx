import React from 'react'
import { Calendar } from "@/components/ui/calendar"
import { useContext, useEffect, useState } from 'react';
import styles from '@/styles/EventCalendar.module.css'

export default function EventCalendar() {
    const publicUrl = process.env.GOOGLE_CALENDAR_PUBLIC_URL;


    return (
      <>
      <div className={styles.iframeContainer}>
        <iframe 
          // src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FVancouver&showDate=1&showPrint=1&showTabs=1&showCalendars=1&title=BCSSA%20Events&src=bTc3dTV1NGJxMHZlMWRkY25sbmFwbGVhOWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bjNuc21lMXEzdnZmbzhvYzkwbGF2bmRpZ29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%239E69AF&color=%238E24AA"
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FVancouver&src=bjNuc21lMXEzdnZmbzhvYzkwbGF2bmRpZ29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%238E24AA"
          // src="https://calendar.google.com/calendar/embed?src=a1287f60da606277e420338be82f04d21509a15db257cab9f66eb1cc75cb5106%40group.calendar.google.com&ctz=America%2FVancouver"
          scrolling="no"
        >
        </iframe>
     </div>
        {/* <iframe 
          src="https://calendar.google.com/calendar/embed?src=a1287f60da606277e420338be82f04d21509a15db257cab9f66eb1cc75cb5106%40group.calendar.google.com&ctz=America%2FVancouver"
          style={{ border: 0, width: 800, height: 600, frameborder: "0", scrolling: "no" }}
        >
        </iframe> */}
      </>
    )
}
