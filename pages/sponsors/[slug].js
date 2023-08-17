import { firestore } from "@/firebase/firebase";
import { query, where, collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import Image from "next/image";

const SponsorPage = ({ sponsor, events }) => {
  return (
    <div className="container mx-auto p-4">
      {/* sponsor info */}
      <div className="mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold mb-2">{sponsor.sponsorName}</h1>
        {/* <Image src={sponsor.sponsorLogo} alt={sponsor.sponsorName} width={50} height={50} className="w-48 h-auto mb-4" /> */}
        <img src={sponsor.sponsorLogo} alt={sponsor.sponsorName} className="w-48 h-auto mb-4" />
        <p>{sponsor.sponsorDescription}</p>
      </div>

      {/* events */}
      <h2 className="text-xl font-semibold mb-4">Events Sponsored:</h2>
      <ul>
        {events.map((event) => (
          <li key={event.eventId} className="mb-4">
            <h3 className="text-lg font-medium">{event.eventName}</h3>
            <p className="text-sm text-gray-600">{new Date(event.eventDate).toLocaleDateString()}</p>
            <p>{event.eventDescription}</p>
            {event.eventImages && (
              <div className="mt-2">
                <img src={event.eventImages} alt={event.eventName} className="w-full max-w-md h-auto" />
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link href="/#sponsors" legacyBehavior>
          <a className="text-blue-600 hover:underline">&larr; Back to all sponsors</a>
        </Link>
      </div>
    </div>
  );
}

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
        if (data.eventDate && data.eventDate.toDate) {
          data.eventDate = data.eventDate.toDate().toISOString();
        }
    
        return data;
    });
  
    return {
      props: {
        sponsor,
        events
      }
    };
  }

export default SponsorPage;
