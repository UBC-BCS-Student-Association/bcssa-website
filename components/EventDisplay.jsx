import React from 'react';
import Image from 'next/image';
import styles from '@/styles/EventItem.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function EventItem({ eventDate, eventDescription, eventImages, eventName }) {
    return (
      <div className={styles.eventItem}>
        <div className={styles.eventDetails}>
            <h3>{eventName}</h3>
            <p>{eventDate}</p>
            <p>{eventDescription}</p>
        </div>
        
        {eventImages && eventImages.length && (
          <div className={styles.carouselContainer}>
            <Carousel dynamicHeight={false} showThumbs={false} infiniteLoop={true} swipeable={true} showIndicators={eventImages.length > 1}>
                {eventImages.map((imgSrc, idx) => (
                    <div key={idx} className={styles.carouselItem}>
                        <Image src={imgSrc} alt={`${eventName} image ${idx + 1}`} width={500} height={300} layout="responsive" className={styles.carouselImage} />
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
    <div className="eventDisplay">
      {events.map(event => (
        <EventItem key={event.eventName} {...event} />
      ))}
    </div>
  );
}

export default EventDisplay;
