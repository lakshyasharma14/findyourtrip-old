import Header from "../components/Header";
import Footer from "../components/Footer";
import TripContainer from "../components/TripContainer";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";
import { getTrips } from "../framework/planetscale/api/trip";

export default function Search({ trips }) {
  const router = useRouter();
  const location = router.query.location;
  const placeholder = router.query.location;
  if (router.query.checkIn && router.query.checkOut) {
    // placeholder = `${router.query.location} | ${format(
    //   new Date(router.query.checkIn),
    //   "d MMM, yy"
    // )} | ${format(new Date(router.query.checkIn), "d MMM, yy")} `;
  }

  useEffect(() => {
    gtag.event({
      action: "trip_search",
      category: "trip",
      label: placeholder,
    });
  }, [placeholder]);

  return (
    <>
      <Header placeholder={placeholder} />
      <main>
        <TripContainer searchString={location} trips={trips} />
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const trips = await getTrips();
    if (!trips) {
      return { notFound: true };
    }
    return { props: { trips } };
  } catch (e) {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
}
