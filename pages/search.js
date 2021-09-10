import Header from "../components/Header";
import Footer from "../components/Footer";
import TripContainer from "../components/TripContainer";
import { useRouter } from "next/router";

export default function Search({ searchResults }) {
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
        <main>
          <TripContainer searchString={location} />
        </main>
        <Footer />
      </main>
      <Footer />
    </>
  );
}

// export async function getServerSideProps() {
//   const searchResults = await fetch("https://links.papareact.com/isz").then(
//     (data) => data.json()
//   );
//   return {
//     props: {
//       searchResults,
//     },
//   };
// }
