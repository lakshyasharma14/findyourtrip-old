import { useRouter } from "next/router";

export default function LocationSearch() {
  const {query: { location }} = useRouter();

  // TODO: Add logic to get all trips by location

  return <h1>`Trips for ${location}`</h1>
}
