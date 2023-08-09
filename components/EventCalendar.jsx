import React from 'react'
import { Calendar } from "@/components/ui/calendar"
import { useContext, useEffect, useState } from 'react';

export default function EventCalendar() {
    const [date, setDate] = React.useState(new Date());

    const publicUrl = process.env.GOOGLE_CALENDAR_PUBLIC_URL;


    return (
      // <Calendar
      //   mode="single"
      //   selected={date}
      //   onSelect={setDate}
      //   className="rounded-md border"
      // />
      <>
        <iframe 
          src={ publicUrl }
          // src="https://calendar.google.com/calendar/embed?src=a1287f60da606277e420338be82f04d21509a15db257cab9f66eb1cc75cb5106%40group.calendar.google.com&ctz=America%2FVancouver"
          style={{ border: 0, width: 800, height: 600, frameborder: "0", scrolling: "no" }}
        >
        </iframe>
      </>
    )
}
