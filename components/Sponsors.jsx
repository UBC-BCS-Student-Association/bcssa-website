import React from 'react';
import { useContext, useEffect, useState } from 'react';
import Carousel from './Carousel';
import { firestore } from "@/firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

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
    <div id="sponsors" className="flex flex-col items-center justify-center min-h-screen">
        <p class="text-2xl text-center ...">Sponsors</p>
        {/* {slides && slides.length > 0 && <Carousel slides={slides} />} */}
        {/* {slides && <Carousel slides={slides} />} */}
        {/* <Carousel slides={[]} /> */}
        <Carousel />
    </div>
  )
}
