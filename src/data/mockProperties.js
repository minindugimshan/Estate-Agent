// // Mock property data
// export const properties = [
//     {
//       id: "prop1",
//       type: "house",
//       bedrooms: 3,
//       price: 750000,
//       tenure: "Freehold",
//       shortDescription: "Attractive three bedroom semi-detached family home",
//       longDescription: "Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland...",
//       location: "Petts Wood Road, Petts Wood, Orpington BR5",
//       postcode: "BR5",
//       dateAdded: "2022-10-12",
//       images: ["https://img.freepik.com/premium-photo/suburban-house-architecture-modern-cottage-house-architecture-concept-property-neighborhood-real-estate-property-insurance-property-architecture-housing-rent-house_474717-149085.jpg?w=900"],
//       floorPlan: ["https://img.freepik.com/free-vector/digital-house-design-with-blueprint_23-2148309839.jpg?t=st=1736025939~exp=1736029539~hmac=d57b7bf3cf612432f78f2510b6d1eb401a538c0b53d7e2140b1ccfeb4604d871&w=740"],
//       coordinates: { lat: 51.3837, lng: 0.0721 }
//     },
//     {
//       id: "prop2",
//       type: "flat",
//       bedrooms: 2,
//       price: 399995,
//       tenure: "Freehold",
//       shortDescription: "Modern two double bedroom garden flat",
//       longDescription: "Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat...",
//       location: "Crofton Road Orpington BR6",
//       postcode: "BR6",
//       dateAdded: "2022-09-14",
//       images: ["https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2053.jpg?t=st=1736025746~exp=1736029346~hmac=05a227a685574ca2d1955c4fea45be0ff84818f783766cf85a98c8549f08465f&w=900"],
//       floorPlan: ["https://img.freepik.com/free-vector/modern-project-blueprint-house_23-2148317370.jpg?t=st=1736025981~exp=1736029581~hmac=a8d5b093423c50efc2d2711b8920a83b818aa93835920bbf907b42f8c066aae3&w=740"],
//       coordinates: { lat: 51.3721, lng: 0.0989 }
//     }
//   ]


// Mock property data
export const properties = [
  {
    id: "prop1",
    type: "house",
    bedrooms: 3,
    price: 750000,
    tenure: "Freehold",
    shortDescription: "Attractive three bedroom semi-detached family home",
    longDescription: "Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
    location: "Petts Wood Road, Petts Wood, Orpington BR5",
    postcode: "BR5",
    dateAdded: "2022-10-12",
    images: [
      "https://img.freepik.com/premium-photo/suburban-house-architecture-modern-cottage-house-architecture-concept-property-neighborhood-real-estate-property-insurance-property-architecture-housing-rent-house_474717-149085.jpg?w=900",
      "/images/prop1/living.jpg",
      "/images/prop1/kitchen.jpg",
      "/images/prop1/bedroom1.jpg",
      "/images/prop1/garden.jpg",
      "/images/prop1/bathroom.jpg"
    ],
    floorPlan: "../assets/images/prop1pic1small.jpg",
    coordinates: { lat: 51.3837, lng: 0.0721 }
  },
  {
    id: "prop2",
    type: "flat",
    bedrooms: 2,
    price: 399995,
    tenure: "Freehold",
    shortDescription: "Modern two double bedroom garden flat",
    longDescription: "Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms. This apartment being only five years old, is still under a 10 year building guarantee...",
    location: "Crofton Road Orpington BR6",
    postcode: "BR6",
    dateAdded: "2022-09-14",
    images: [
      "https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2053.jpg?t=st=1736025746~exp=1736029346~hmac=05a227a685574ca2d1955c4fea45be0ff84818f783766cf85a98c8549f08465f&w=900",
      "/images/prop2/living.jpg",
      "/images/prop2/kitchen.jpg",
      "/images/prop2/bedroom1.jpg",
      "/images/prop2/garden.jpg",
      "/images/prop2/bathroom.jpg"
    ],
    floorPlan: "/images/prop2/floorplan.jpg",
    coordinates: { lat: 51.3721, lng: 0.0989 }
  },
  {
    id: "prop3",
    type: "house",
    bedrooms: 4,
    price: 925000,
    tenure: "Freehold",
    shortDescription: "Stunning four bedroom detached house in prestigious location",
    longDescription: "Features include a modern kitchen with integrated appliances, spacious living room with bay window, separate dining room, master bedroom with en-suite, three additional bedrooms, family bathroom, double garage, and landscaped garden.",
    location: "Chislehurst BR7",
    postcode: "BR7",
    dateAdded: "2024-12-01",
    images: [
      "https://img.freepik.com/premium-photo/abramtsevo-russia-moscow-region_146605-23.jpg?w=826",
      "/images/prop3pic2.jpg",
      "/images/prop3pic3.jpg",
      "/images/prop3pic4.jpg",
      "/images/prop3pic5.jpg",
      "/images/prop3pic6.jpg"
    ],
    floorPlan: "/images/prop3plan.jpg",
    coordinates: { lat: 51.4184, lng: 0.0485 }
  },
  {
    id: "prop4",
    type: "flat",
    bedrooms: 1,
    price: 275000,
    tenure: "Leasehold",
    shortDescription: "Modern one bedroom apartment in a newly built development",
    longDescription: "Open plan kitchen/living area, double bedroom, modern bathroom, private balcony with city views. Benefits from concierge service and communal garden.",
    location: "Greenwich SE10",
    postcode: "SE10",
    dateAdded: "2024-11-28",
    images: [
      "https://img.freepik.com/free-photo/cozy-living-room-interior-with-panoramic-window_1262-12322.jpg?t=st=1736049573~exp=1736053173~hmac=342ecea9dbddae9f41c71c907073f8bdf56dd636a41e4af328a16f01672b1cdf&w=826",
      "/images/prop4pic2.jpg",
      "/images/prop4pic3.jpg",
      "/images/prop4pic4.jpg",
      "/images/prop4pic5.jpg",
      "/images/prop4pic6.jpg"
    ],
    floorPlan: "/images/prop4plan.jpg",
    coordinates: { lat: 51.4826, lng: 0.0077 }
  },
  {
    id: "prop5",
    type: "house",
    bedrooms: 5,
    price: 1250000,
    tenure: "Freehold",
    shortDescription: "Exceptional five bedroom Victorian house with period features",
    longDescription: "Comprises large reception rooms, eat-in kitchen, master bedroom with en-suite, four further bedrooms, two bathrooms, cellar, and west-facing garden.",
    location: "Blackheath SE3",
    postcode: "SE3",
    dateAdded: "2024-12-05",
    images: [
      "https://img.freepik.com/premium-photo/buildings-town_1048944-19155124.jpg?w=826",
      "/images/prop5pic2.jpg",
      "/images/prop5pic3.jpg",
      "/images/prop5pic4.jpg",
      "/images/prop5pic5.jpg",
      "/images/prop5pic6.jpg"
    ],
    floorPlan: "/images/prop5plan.jpg",
    coordinates: { lat: 51.4659, lng: 0.0111 }
  },
  {
    id: "prop6",
    type: "flat",
    bedrooms: 3,
    price: 550000,
    tenure: "Leasehold",
    shortDescription: "Spacious three bedroom apartment in converted mansion block",
    longDescription: "Features high ceilings, large windows, separate kitchen, three double bedrooms, two bathrooms, and communal gardens.",
    location: "Crystal Palace SE19",
    postcode: "SE19",
    dateAdded: "2024-11-15",
    images: [
      "https://img.freepik.com/premium-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1370.jpg?w=826",
      "/images/prop6pic2.jpg",
      "/images/prop6pic3.jpg",
      "/images/prop6pic4.jpg",
      "/images/prop6pic5.jpg",
      "/images/prop6pic6.jpg"
    ],
    floorPlan: "/images/prop6plan.jpg",
    coordinates: { lat: 51.4185, lng: 0.0798 }
  },
  {
    id: "prop7",
    type: "house",
    bedrooms: 2,
    price: 425000,
    tenure: "Freehold",
    shortDescription: "Charming two bedroom terraced house perfect for first-time buyers",
    longDescription: "Featuring modern kitchen, living room with fireplace, two double bedrooms, upstairs bathroom, and private garden.",
    location: "Forest Hill SE23",
    postcode: "SE23",
    dateAdded: "2024-12-10",
    images: [
      "https://img.freepik.com/premium-photo/average-residential-house-with-green-lawn-cloudy-day-canada_769578-2432.jpg?w=826",
      "/images/prop7pic2.jpg",
      "/images/prop7pic3.jpg",
      "/images/prop7pic4.jpg",
      "/images/prop7pic5.jpg",
      "/images/prop7pic6.jpg"
    ],
    floorPlan: "/images/prop7plan.jpg",
    coordinates: { lat: 51.4376, lng: 0.054 }
  }
];
