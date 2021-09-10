export const trip_data = [
  {
    plan: {
      id: 1,
      slug: "Kudremukh-Trek-Chikmagalur",
      name: "Kudremukh Trek, Chikmagalur",
      description: [
        "Enjoy trekking to the 3rd highest peak of Karnataka- Kudremukh Trek with an altitude of 6,207 feet.",
      ],
      rating: 4,
      review_count: 2400,
      locations: ["Chikmagalur, Karnataka"],
      duration_days: 3,
      duration_nights: 4,
      price: 1000,
      meals: ["BREAKFAST"],
      acc_type: "Tent",
      transport_type_id: 3,
      featured: true,
    },
    schedule: [
      {
        start_ts: 2323435,
        end_ts: 35346363,
      },
    ],
    itinerary: {
      pickup_points: ["Domlur 9:15 PM"],
      day_info: [
        {
          day: 1,
          activities: [
            "Get picked up in Bangalore from the following points and start your Kudremukh trekking tour",
          ],
        },
      ],
    },
    org: {
      org_id: 1,
      org_name: "tripojo",
      org_contact: "8999999993",
      org_email: "tripojo@gmail.com",
      social_media_data: {
        facebook: "https://www.facebook.com/tripojo",
      },
    },
    pic: {
      pic_contact: "8999999999",
    },
    images: [
      {
        fields: {
          file: {
            url: "/images/results/4.jpg",
          },
        },
      },
      {
        fields: {
          file: {
            url: "/images/results/9.jpg",
          },
        },
      },
      {
        fields: {
          file: {
            url: "/images/results/10.jpg",
          },
        },
      },
    ],
    search_context: ["chikmagalur", "karnataka", "tripojo"],
  },
  {
    plan: {
      id: 2,
      slug: "kasol",
      name: "Kasol Kheerganga",
      description: [
        "The Kasol Kheerganga Trek starts at Kasol, a small village located in the Kullu district of HP.",
        " It is nestled deep in the scenic Parvati Valley and is fast emerging as a major spot for tourists looking for budget travelling. Kheerganga’s history is believed to be dated thousands of years back, with the natural place coming into existence as the abode of Lord Shiva. The Kasol Kheerganga (Khir Ganga) trek is a favourite amongst those seeking a backpacker’s adventure in Kasol or Kullu.",
      ],
      rating: 4,
      review_count: 2400,
      locations: ["Kheerganga", "Kasol"],
      duration_days: 3,
      duration_nights: 4,
      price: 2000,
      meals: ["BREAKFAST"],
      acc_type: "Hotel - 5 Star",
      transport_type_id: 3,
      featured: true,
    },
    schedule: [
      {
        start_ts: 2323435,
        end_ts: 35346363,
      },
    ],
    itinerary: {
      pickup_points: ["Domlur 9:15 PM"],
      day_info: [
        {
          day: 1,
          activities: [
            "Board bus the night before and reach Kasol via Bus (Applicable on Delhi to Delhi variant)",
            "Upon reaching Kasol at around 10:30 AM, you can head out to explore Kasol. Explore all the landmarks of Kasol and enjoy the many cafés which serve the delicious local cuisine, before heading back.",
            "After getting back, freshen up, relax for a while and then enjoy the bonfire and music set up for you.",
            "Afterwards, have the wonderful experience of a music session and a splendid campfire as you enjoy a scrumptious dinner prepared for you.",
            "Adventure doesn't stop here, as you snuggle into your mountain top camping tents, surrounded by the surreal Parvati Valley; after the ablaze bonfire to keep you cozy and warm.",
          ],
        },
        {
          day: 2,
          activities: [
            "6:00 AM - Wake up call. Enjoy the hot, fresh breakfast before starting your day.",
            "Reach Barshaini by 10:30 AM. From here, the much-awaited trek to Kheerganga begins! The trek takes about 5-6 hours to complete.",
            "After getting back, freshen up, relax for a while and then enjoy the bonfire and music set up for you.",
            "Upon reaching Kheerganga, you can explore the various forest trails and the surrounding woods. The pretty wildflowers and the humongous oaks and deodars are enticing for all.",
            "In the evening, enjoy a fun music session, next to a cozy campfire before heading to your tents for the night!",
          ],
        },
      ],
    },
    org: {
      org_id: 1,
      org_name: "banbanjara",
      org_contact: "9001504000",
      org_email: "info@banbanjara.com",
      social_media_data: {
        facebook:
          "https://banbanjara.com/tours/kasol-kheerganga-trek-with-camping",
      },
    },
    pic: {
      pic_contact: "9001504000",
    },
    images: [
      {
        fields: {
          file: {
            url: "/images/results/1.jpg",
          },
        },
      },
      {
        fields: {
          file: {
            url: "/images/results/2.jpg",
          },
        },
      },
      {
        fields: {
          file: {
            url: "/images/results/3.jpg",
          },
        },
      },
      {
        fields: {
          file: {
            url: "/images/results/15.jpg",
          },
        },
      },
    ],
    search_context: ["kasol", "kheerganga", "banbanjara"],
  },
];

export const acc_type_meta = {
  1: "Hotel - 3 Star",
  2: "Hotel - 4 Star",
  3: "Hotel - 5 Star",
  4: "Tent",
};
export const transport_type_meta = {
  1: "AC Sleeper",
  2: "Non-AC Sleeper",
  3: "AC Semi-Sleeper",
  4: "Self Drive",
};

export const discover = {
  title: "Discover things to do",
  items: [
    {
      title: "Featured collection: Wanderlust",
      p: "Travel from home with Online Experiences.",
      img: "1.jpg",
    },
    {
      title: "Online Experiences",
      p: "Live, interactive activities led by Hosts.",
      img: "2.jpg",
    },
    {
      title: "Experiences",
      p: "Find unforgettable activities near you.",
      img: "3.jpg",
    },
  ],
  urlPrefix: "/images/discover/",
};

export const live = {
  title: "Experiences:",
  items: [
    {
      title: "Weekend getaways",
      img: "weekend_getaway.jpg",
    },
    {
      title: "Hiking",
      img: "hiking.jpg",
    },
    {
      title: "Relaxing trips",
      img: "relaxing_trip.jpg",
    },
    {
      title: "Road Trips",
      img: "roadtrip.jpg",
    },
  ],
  urlPrefix: "/images/live/",
};

export const places = [
  { name: "Bengaluru", time: 3 },
  { name: "Puducherry", time: 3 },
  { name: "Kodaikannal", time: 3.5 },
  { name: "Mysuru", time: 4 },
  { name: "Chennai", time: 4.5 },
  { name: "Kochi", time: 6 },
  { name: "Ooty", time: 3.5 },
  { name: "Trivandrum", time: 7.5 },
];

export const resultImages = [
  ["11.jpg", "12.jpg", "13.jpg", "19.jpg"],
  ["5.jpg", "6.jpg", "7.jpg"],
  ["4.jpg", "9.jpg", "10.jpg"],
  ["8.jpg"],
  ["1.jpg", "2.jpg", "3.jpg", "15.jpg"],
  ["16.jpg", "17.jpg"],
  ["18.jpg", "14.jpg", "20.jpg"],
];
