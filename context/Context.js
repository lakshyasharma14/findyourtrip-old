import React from "react";
import { useState } from "react";
import { trip_data } from "../data";
import { useEffect } from "react";
const TripContext = React.createContext();

const TripProvider = ({ children }) => {
  const [tripData, setTripData] = useState({
    trips: [],
    featuredTrips: [],
    loading: true,
  });

  useEffect(() => {
    let trips = formatData(trip_data);
    let featuredTrips = trips.filter((trip) => trip.plan.featured === true);
    setTripData({
      trips,
      featuredTrips,
      loading: false,
    });
  }, []);

  const getTrip = (slug) => {
    let tempTrips = [...tripData.trips];
    const trip = tempTrips.find((trip) => trip.plan.slug === slug);
    return trip;
  };

  function formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.plan.id;
      let images = item.images.map((images) => images.fields.file.url);
      let trip = { ...item, images, id };
      return trip;
    });
    return tempItems;
  }

  return (
    <TripContext.Provider value={{ ...tripData, getTrip }}>
      {children}
    </TripContext.Provider>
  );
};

const TripConsumer = TripContext.Consumer;

export { TripConsumer, TripProvider, TripContext };
