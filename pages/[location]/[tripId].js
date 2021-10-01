import Image from "next/image";
import { useState } from "react";
import { Star } from "react-feather";
import { useRouter } from "next/router";
import { trip_data } from "../../data";
import NotFound from "../../components/NotFound";

export default function Trip() {
  const {query: { location, tripId }} = useRouter();

  // TODO: Replace logic to get trip by location and slug from API
  const trips = trip_data.filter(({plan: {slug}}) => slug.toLowerCase() == tripId);

  return trips.length === 0 ? <NotFound/> : <TripDetails trip={trips[0]} />
}

function TripDetails({ location, trip }) {
  const {
    plan: { name, description, slug, price, rating, duration_days, duration_nights, acc_type_id, transport_type_id },
    images
  } = trip;

  return (
    <main>
      <div className="details">
        <div className="rating">
          <Star className="star" /> {rating}
        </div>
        <p className="subtitle">{location}</p>
        <h2>{name}</h2>
        <p className="description">{description[0]}</p>
        <p className="price">
          <span>
            {price} <small>/person</small>
          </span>
        </p>
      </div>
      </main>
  );
}

const ImageComponent = ({ url, location }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`img ${loading ? "loading" : null}`}>
      <Image
        layout="fill"
        alt={location}
        objectFit="cover"
        src={url}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};
