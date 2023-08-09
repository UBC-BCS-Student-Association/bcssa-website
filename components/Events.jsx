import React from 'react'
import Link from 'next/link'
import EventCalendar from './EventCalendar'

export default function Events() {
  return (
    <div id="events" className="flex flex-col items-center justify-center min-h-screen">
        <p class="text-2xl text-center ...">Events</p>
        <EventCalendar />
        <Link href="/pastEvents" legacyBehavior>
            <a class="no-underline hover:underline ...">Past Events</a>
        </Link>
    </div>
  )
}
