import React from 'react';
import { useContext, useEffect, useState } from 'react';
import Carousel from './Carousel';
import { firestore } from "@/firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import styles from '@/styles/Section.module.css'

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

export default function Sponsors({ sponsors }) {
  console.log(sponsors);
  return (
    <div id="sponsors" className={styles.container}>
        <p class="text-2xl text-center ...">Sponsors</p>
        {/* {slides && slides.length > 0 && <Carousel slides={slides} />} */}
        {/* {slides && <Carousel slides={slides} />} */}
        {/* <Carousel slides={[]} /> */}
        <Carousel />
    </div>
  )
}
