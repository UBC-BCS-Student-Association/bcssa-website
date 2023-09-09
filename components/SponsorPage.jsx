import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import sectionStyles from '@/styles/Section.module.css';
import eventStyles from '@/styles/EventItem.module.css';
import { Separator } from './ui/separator';
import { Button } from "@/components/ui/button";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SponsorPage = ({ sponsor, events }) => {
  return (
    <main className='flex flex-col items-center justify-between'>
      <div className={sectionStyles.sectionContainer}>
        {/* <p className={sectionStyles.sectionTitle}>{sponsor.sponsorName}</p> */}
        <div className={sectionStyles.sectionImage}>
          <Image src={sponsor.sponsorLogo} alt={sponsor.sponsorName} width={400} height={200} layout="responsive" />
        </div>
        <Separator className={sectionStyles.sectionSeparator} />
        
        <div className={sectionStyles.sectionContent}>
          <h2 className={sectionStyles.sectionSubHeading}>Events Sponsored by {sponsor.sponsorName}</h2>
          {/* <span className={sectionStyles.yellowBrace}>{" {"}</span> */}
        
          {events.map((event) => (
            <div key={event.eventId} className={eventStyles.eventItem}>
              <div className={eventStyles.eventDetails}>
                <h3 className={eventStyles.eventName}>{event.eventName}</h3>
                <p>{event.eventDate}</p>
              </div>

              {event.eventImages && event.eventImages.length > 0 && (
                <div className={eventStyles.carouselContainer}>
                  <Carousel dynamicHeight={false} showThumbs={false} infiniteLoop={true} swipeable={true} showIndicators={event.eventImages.length > 1}>
                    {event.eventImages.map((imgSrc, idx) => (
                      <div key={idx} className={eventStyles.carouselItem}>
                        <Image 
                          src={imgSrc} 
                          alt={`${event.eventName} image ${idx + 1}`} 
                          width={500} 
                          height={300} 
                          layout="intrinsic" 
                          objectFit="cover"
                          objectPosition="center center"
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              )}
            </div>
          ))}
          {/* <span className={sectionStyles.yellowBraceEnd}>{"}"}</span> */}

          <Link href="/#sponsors">
            <Button className={sectionStyles.sectionButton} variant="outline">
              Back to Sponsors
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default SponsorPage;
