import React from 'react'
import { Calendar } from "@/components/ui/calendar"
import { useContext, useEffect, useState } from 'react';

export default function EventCalendar() {
    const [date, setDate] = React.useState(new Date());


    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    )
}
