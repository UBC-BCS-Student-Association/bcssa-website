import React from "react";
import styles from "@/styles/EventCalendar.module.css";

export default function EventCalendar() {
  const publicUrl = process.env.GOOGLE_CALENDAR_PUBLIC_URL;

  return (
    <>
      <div className={styles.iframeContainer}>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FVancouver&title=BCSSA%20Events&src=bTc3dTV1NGJxMHZlMWRkY25sbmFwbGVhOWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bjNuc21lMXEzdnZmbzhvYzkwbGF2bmRpZ29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%239E69AF&color=%238E24AA"
          scrolling="no"></iframe>
      </div>
    </>
  );
}
