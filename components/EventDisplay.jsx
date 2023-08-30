import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import eventStyles from '@/styles/EventItem.module.css';
import sectionStyles from '@/styles/Section.module.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function EventItem({ eventDate, eventDescription, eventImages, eventName }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  const formattedEventDate = formatDate(eventDate);

  return (
    <div className={eventStyles.eventItem}>
      <div className={eventStyles.eventDetails}>
          <h3 className={eventStyles.eventName}>{eventName}</h3>
          <p>{formattedEventDate}</p>
          {/* <p>{eventDescription}</p> */}
      </div>
      
      {eventImages && eventImages.length > 0 && (
        <div className={eventStyles.carouselContainer}>
          <Carousel dynamicHeight={false} showThumbs={false} infiniteLoop={true} swipeable={true} showIndicators={eventImages.length > 1}>
              {eventImages.map((imgSrc, idx) => (
                <div key={idx} className={eventStyles.carouselItem}>
                  <Image 
                    src={imgSrc} 
                    alt={`${eventName} image ${idx + 1}`} 
                    width={500} 
                    height={300} 
                    layout="fixed" 
                    objectFit="cover"
                    objectPosition="center center"
                  />
                </div>
              ))}
          </Carousel>
        </div>
      )}
    </div>
  );
}

const EventDisplay = ({ events }) => {
  return (
    <>
    <div className={eventStyles.eventDisplay}>
      {events.map(event => (
        <EventItem key={event.eventName} {...event} />
      ))}
    </div>
    <Link href="/#events">
      <Button className={sectionStyles.sectionButton} variant="outline">
        Back to Events
      </Button>
    </Link>
    </>
  );
}

export default EventDisplay;
