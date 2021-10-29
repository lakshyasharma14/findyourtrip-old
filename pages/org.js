import Header from "../components/Header";
import Footer from "../components/Footer";
import TripContainer from "../components/TripContainer";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";
import { getTripsForOrg } from "../framework/planetscale/api/trip";
import { getSession } from "next-auth/client";
import SearchResults from "../components/SearchResults";
import Link from "next/link";
import ProfileContainer from "../components/ProfileContainer";

export default function Org({ trips }) {
  const router = useRouter();
  const location = router.query.location;
  const placeholder = router.query.location;
  if (router.query.checkIn && router.query.checkOut) {
    // placeholder = `${router.query.location} | ${format(
    //   new Date(router.query.checkIn),
    //   "d MMM, yy"
    // )} | ${format(new Date(router.query.checkIn), "d MMM, yy")} `;
  }

  return (
    <>
      <Header placeholder={placeholder} />
      <main>
        <ProfileContainer trips={trips} />
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  try {
    const trips = await getTripsForOrg(session.user.email);
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
