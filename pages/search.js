import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchResults from "../components/SearchResults";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Search({ searchResults }) {
  const router = useRouter();
  console.log(router);
  const placeholder = router.query.location;

  const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <>
      <Header placeholder={placeholder} />
      <main>
        <SearchResults
          setSelectedLocation={setSelectedLocation}
          results={searchResults}
        />
      </main>
      <Footer />
    </>
  );
}
