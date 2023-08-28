import EventDisplay from '@/components/EventDisplay';
import React from 'react';

const eventsData = [
  {
    eventDate: '2023-09-01',
    eventName: 'BCS Pub Crawl',
    eventDescription: 'event description',
    eventImages: ['/events/2023-01-08-Pub-Crawl/BCSPubCrawlJan82023.jpeg'],
  },
  {
    eventDate: '2023-09-01',
    eventName: 'Jan Social at The Gallery',
    eventDescription: 'event description',
    eventImages: ['/events/2023-01-27-Social-at-The-Gallery/BCSSocialatGalleryJan272023.jpg'],
  },
  {
    eventDate: '2023-09-01',
    eventName: 'Feb Social at The Gallery',
    eventDescription: 'event description',
    eventImages: ['/events/2023-02-16-Social-at-The-Gallery/BCSSocialatGalleryFeb162023.jpeg'],
  },
  {
    eventDate: '2023-09-01',
    eventName: 'SAP Resume Workshop',
    eventDescription: 'event description',
    eventImages: ['/events/2023-02-21-SAP-Resume-Workshop/890D62A4-ACB9-45E0-BEBC-CE199EE657A1_1_105_c.jpeg'],
  },
  {
    eventDate: '2023-09-01',
    eventName: 'BCS Hacks 2023',
    eventDescription: 'event description',
    eventImages: [
      '/events/2023-03-24-25-BCS-Hacks 2023/DSC04145.JPG',
      '/events/2023-03-24-25-BCS-Hacks 2023/DSC04252.JPG',
      '/events/2023-03-24-25-BCS-Hacks 2023/DSC04286.JPG',
      '/events/2023-03-24-25-BCS-Hacks 2023/DSC04440.JPG',
      '/events/2023-03-24-25-BCS-Hacks 2023/DSC04448.JPG',
      '/events/2023-03-24-25-BCS-Hacks 2023/DSC04539.JPG',
      '/events/2023-03-24-25-BCS-Hacks 2023/DSC04622.JPG',
      '/events/2023-03-24-25-BCS-Hacks 2023/DSC04655.JPG',
    ],
  },
  {
    eventDate: '2023-09-01',
    eventName: 'Term 2 BCSSA Gathering',
    eventDescription: 'event description',
    eventImages: ['/events/2023-04-19-Term-2-BCSSA-Gathering/A8252D79-EAA9-43CA-A1E1-DB49FE100A19_1_105_c.jpeg'],
  },
];

export default function PastEvents() {
  return (
    <>
    <div id="PastEvents" className="flex flex-col items-center justify-center min-h-screen">
        <p class="text-2xl text-center ...">PastEvents</p>
        <EventDisplay events={eventsData} />
    </div>
    </>
  )
}
