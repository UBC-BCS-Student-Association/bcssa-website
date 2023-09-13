import { firestore, storage } from "@/firebase/firebase";
import { query, where, collection, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref as storageRef } from "firebase/storage";
import Link from 'next/link';
import Image from "next/image";
import SponsorPage from "@/components/SponsorPage";

// Create a reference from a Google Cloud Storage URI
const getHttpsUrl = async (gsUrl) => {
  try {
    const ref = storageRef(storage, gsUrl.replace('gs://bcssa-website.appspot.com/', ''));
    return await getDownloadURL(ref);
  } catch (error) {
    console.error('Error getting download URL: ', error);
    throw error;
  }
};

// const formatDate = (dateString) => {
//   const options = { year: 'numeric', month: 'short', day: '2-digit' };
//   return new Date(dateString).toLocaleDateString('en-US', options);
// };
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  const formatUTCDate = (str) => {
      const [year, month, day] = str.split("-").map(part => parseInt(part, 10));
      return new Date(year, month - 1, day).toLocaleDateString('en-US', options);
  };
  if (dateString.includes('to')) {
      return dateString.split(' to ').map(formatUTCDate).join(' to ');
  } else {
      return formatUTCDate(dateString);
  }
};



export async function getStaticPaths() {
    const sponsorsRef = collection(firestore, "sponsors");
    const sponsorSnapshot = await getDocs(sponsorsRef);

    const paths = sponsorSnapshot.docs.map(doc => ({
        params: { slug: doc.data().sponsorSlug }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
  const sponsorsCol = collection(firestore, "sponsors");
  const sponsorQ = query(sponsorsCol, where('sponsorSlug', '==', params.slug));

  const sponsorSnapshot = await getDocs(sponsorQ);

  if (sponsorSnapshot.empty) {
    return { notFound: true };
  }

  const sponsor = sponsorSnapshot.docs[0].data();

  const eventsCol = collection(firestore, "events");
  const eventsQ = query(eventsCol, where('sponsorIds', 'array-contains', sponsor.sponsorId));

  const eventsSnapshot = await getDocs(eventsQ);

  const events = eventsSnapshot.docs.map(doc => {
      const data = doc.data();
      
      // firestore timestamp
      // if (data.eventDate && data.eventDate.toDate) {
      //   data.eventDate = formatDate(data.eventDate.toDate().toISOString());
      //   console.log(data.eventDate);
      // }
      data.eventDate = formatDate(data.eventDate);

      return data;
  });

  // convert google storage urls to https urls for images
  if (sponsor.sponsorLogo.startsWith('gs://')) {
    sponsor.sponsorLogo = await getHttpsUrl(sponsor.sponsorLogo);
  }

  for (let event of events) {
    if (event.eventImages) {
      for (let i = 0; i < event.eventImages.length; i++) {
        if (event.eventImages[i].startsWith('gs://')) {
          event.eventImages[i] = await getHttpsUrl(event.eventImages[i]);
        }
      }
    }

    // Format the date
    // event.eventDate = new Date(event.eventDate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
  }
  
  return {
    props: {
      sponsor,
      events
    }
  };
}

export default SponsorPage;
