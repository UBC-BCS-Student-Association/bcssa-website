import React from "react";
import styles from "@/styles/Section.module.css";
import { Separator } from "@/components/ui/separator";
import EventDisplay from "@/components/EventDisplay";

const eventsData = [
  {
    eventDate: "2023-01-08",
    eventName: "BCS Pub Crawl",
    eventDescription:
      "The first BCS social event of the new year saw BCS students and friends enjoying local brews in Olympic Village.",
    eventImages: ["/events/2023-01-08-Pub-Crawl/BCSPubCrawlJan82023.jpeg"],
  },
  {
    eventDate: "2023-01-27",
    eventName: "Jan Social at The Gallery",
    eventDescription:
      "BCSers gathered for a casual social event at the Gallery to kick off the weekend with drinks and snacks.",
    eventImages: [
      "/events/2023-01-27-Social-at-The-Gallery/BCSSocialatGalleryJan272023.jpg",
    ],
  },
  {
    eventDate: "2023-02-16",
    eventName: "Feb Social at The Gallery",
    eventDescription:
      "To kick off reading break, BCSSA hosted another successful social event at the Gallery.",
    eventImages: [
      "/events/2023-02-16-Social-at-The-Gallery/BCSSocialatGalleryFeb162023.jpeg",
    ],
  },
  {
    eventDate: "2023-02-21",
    eventName: "SAP Resume Workshop",
    eventDescription:
      "BCSSA partnered with SAP to host a resume workshop at SAP's downtown office. BCSers had the opportunity to learn from various SAP recruiters, including those focused on the iXp internship program and full-time new hires. The event featured a brief panel discussion, resume reviews, and a Q&A session.",
    eventImages: [
      "/events/2023-02-21-SAP-Resume-Workshop/890D62A4-ACB9-45E0-BEBC-CE199EE657A1_1_105_c.jpeg",
    ],
  },
  {
    eventDate: "2023-03-24 to 2023-03-25",
    eventName: "BCS Hacks 2023",
    eventDescription:
      "BCSSA's largest annual event, BCS Hacks, is a 2-day hackathon where teams of 5 BCSers collaborate to create functional projects. These projects are then presented to industry and faculty judges, with opportunities for early-bird and cash prizes. Throughout the event, industry mentors are on hand to provide guidance. In preparation for the hackathon, two workshops were held: BCS Hacks Workshop #1: Introduction to React Native and Expo & BCS Hacks Workshop #2: Introduction to GitHub, Dev Tools, and Web Development.",
    eventImages: [
      "/events/2023-03-24-25-BCS-Hacks 2023/DSC04375.JPG",
      "/events/2023-03-24-25-BCS-Hacks 2023/0A4BD491-67C5-4E5C-ABB2-3FBFCC3FCBFE.jpeg",
      "/events/2023-03-24-25-BCS-Hacks 2023/DSC04145.JPG",
      "/events/2023-03-24-25-BCS-Hacks 2023/DSC04252.JPG",
      "/events/2023-03-24-25-BCS-Hacks 2023/DSC04286.JPG",
      "/events/2023-03-24-25-BCS-Hacks 2023/DSC04440.JPG",
      "/events/2023-03-24-25-BCS-Hacks 2023/DSC04448.JPG",
      "/events/2023-03-24-25-BCS-Hacks 2023/DSC04539.JPG",
      "/events/2023-03-24-25-BCS-Hacks 2023/DSC04622.JPG",
      "/events/2023-03-24-25-BCS-Hacks 2023/DSC04655.JPG",
    ],
  },
  {
    eventDate: "2023-04-03 to 2023-04-06",
    eventName: "Easter Egg Hunt",
    eventDescription:
      "BCSSA celebrated Easter with a nostalgic egg hunt in the computer science building, featuring three chocolate-redeemable tickets hidden daily.",
    eventImages: [
      "/events/2023-04-03 to 06 BCS Easter Egg Hunt/339315233_198901296191100_6839892246812770189_n.jpg",
    ],
  },
  {
    eventDate: "2023-04-19",
    eventName: "Term 2 BCSSA Gathering",
    eventDescription:
      "BCSSA team dinner: celebrating a successful term, hard work, and team bonding with food, drinks, and board games.",
    eventImages: [
      "/events/2023-04-19-Term-2-BCSSA-Gathering/A8252D79-EAA9-43CA-A1E1-DB49FE100A19_1_105_c.jpeg",
    ],
  },
  {
    eventDate: "2023-04-28 to 2023-4-30",
    eventName: "American Statistical Association (ASA) DataFest Datathon",
    eventDescription:
      "A cross-collaboration event with WiDS and QueerCoded, the Datafest's core mission is to provide our members with the resources they need to build an innovative, large-scale data analysis project that they can add to their portfolio, and gain experience building in a team environment.",
    eventImages: ["/events/2023-04-28-ASADataFestDatathon/A0IMG_0398.jpeg",
                  "/events/2023-04-28-ASADataFestDatathon/2.jpeg",
                  "/events/2023-04-28-ASADataFestDatathon/3.jpeg",
                  "/events/2023-04-28-ASADataFestDatathon/4.jpeg",
                  "/events/2023-04-28-ASADataFestDatathon/5.jpeg",
                  "/events/2023-04-28-ASADataFestDatathon/6.jpeg",
                  "/events/2023-04-28-ASADataFestDatathon/7.jpeg",],
  },
  {
    eventDate: "2023-05-19",
    eventName: "BCS Ice Cream Social",
    eventDescription:
      "BCSers celebrated the start of the summer semester in style, enjoying delicious Rain or Shine ice cream, badminton and frisbee!",
    eventImages: [
      "/events/2023-05-19 BCS Ice Cream Social/B4B0472C-08CE-40DD-843C-46F63DC63D64_1_105_c.jpeg",
      "/events/2023-05-19 BCS Ice Cream Social/D0F00DB8-9BC3-4CD7-B888-AEB363DA6E4A_1_105_c.jpeg",
    ],
  },
];

export default function PastEvents() {
  const reversedEventsData = [...eventsData].reverse();
  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <div id="PastEvents" className={styles.sectionContainer}>
          <p className={styles.sectionTitle}>Past Events</p>
          <Separator className={styles.sectionSeparator} />
          <div className={styles.sectionContent}>
            <EventDisplay events={reversedEventsData} />
          </div>
        </div>
      </main>
    </>
  );
}
