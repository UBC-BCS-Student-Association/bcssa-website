import { firestore } from "@/firebase/firebase";
import { query, where, collection, getDocs } from "firebase/firestore";
import { getHttpsUrl, formatDate } from "@/lib/utils";
import SponsorPage from "@/components/SponsorPage";

export async function getStaticPaths() {
  const sponsorsRef = collection(firestore, "sponsors");
  const sponsorSnapshot = await getDocs(sponsorsRef);

  const paths = sponsorSnapshot.docs.map((doc) => ({
    params: { slug: doc.data().sponsorSlug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const sponsorsCol = collection(firestore, "sponsors");
  const sponsorQ = query(sponsorsCol, where("sponsorSlug", "==", params.slug));

  const sponsorSnapshot = await getDocs(sponsorQ);

  if (sponsorSnapshot.empty) {
    return { notFound: true };
  }

  const sponsor = sponsorSnapshot.docs[0].data();

  const eventsCol = collection(firestore, "events");
  const eventsQ = query(
    eventsCol,
    where("sponsorIds", "array-contains", sponsor.sponsorId)
  );

  const eventsSnapshot = await getDocs(eventsQ);

  const events = eventsSnapshot.docs.map((doc) => {
    const data = doc.data();
    data.eventDate = formatDate(data.eventDate);
    return data;
  });

  // convert google storage urls to https urls for images
  if (sponsor.sponsorLogo.startsWith("gs://")) {
    sponsor.sponsorLogo = await getHttpsUrl(sponsor.sponsorLogo);
  }

  for (let event of events) {
    if (event.eventImages) {
      for (let i = 0; i < event.eventImages.length; i++) {
        if (event.eventImages[i].startsWith("gs://")) {
          event.eventImages[i] = await getHttpsUrl(event.eventImages[i]);
        }
      }
    }
  }

  return {
    props: {
      sponsor,
      events,
    },
  };
}

export default SponsorPage;
