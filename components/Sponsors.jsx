import React from 'react';
import { useContext, useEffect, useState } from 'react';
import Carousel from './Carousel';
import { firestore } from "@/firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import styles from '@/styles/Section.module.css'
import SponsorList from './SponsorList';

const monetarySponsors = [
  {
    icon: '/logo-shield.png',
    name: 'Axiom Zen',
    url: '/sponsors/axiom-zen'
  },
  {
    icon: '/logo-shield.png',
    name: 'AMS',
    url: '/sponsors/ams'
  },
];

const inKindSponsors = [
  {
    icon: '/logo-shield.png',
    name: 'SAP',
    url: '/sponsors/sap'
  },
  {
    icon: '/logo-shield.png',
    name: 'Dapper Labs',
    url: '/sponsors/dapper-labs'
  },
];

// export async function getSponsors() {
//   const sponsorsRef = collection(firestore, "sponsors");
//   const sponsorSnapshot = await getDocs(sponsorsRef);

//   const sponsors = sponsorSnapshot.docs.map(doc => {
//       const data = doc.data();
//       return data;
//   });

//   return {
//       props: {
//         sponsors
//       }
//   };
// }

// useEffect(() => {
//   getSponsors();
// }, []);

export default function Sponsors() {
  return (
    <div id="sponsors" className={styles.container}>
        <p class="text-2xl text-center ...">Sponsors</p>
        <SponsorList monetarySponsors={monetarySponsors} inKindSponsors={inKindSponsors} />
        {/* {slides && slides.length > 0 && <Carousel slides={slides} />} */}
        {/* {slides && <Carousel slides={slides} />} */}
        {/* <Carousel slides={[]} /> */}
        {/* <Carousel /> */}
    </div>
  )
}
