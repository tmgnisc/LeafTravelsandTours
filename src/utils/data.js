// destinations img
import tour4 from "../assets/images/tour/Tokyo.png";
import tour5 from "../assets/images/tour/bali-1.png";
import tour6 from "../assets/images/tour/bangkok.png";
import tour7 from "../assets/images/tour/cancun.png";
import tour8 from "../assets/images/tour/nah-trang.png";
import tour9 from "../assets/images/tour/phuket.png";
import tour10 from "../assets/images/tour/paris.png";
import tour11 from "../assets/images/tour/malaysia.png";

// populars img
import Anchorage from "../assets/images/popular/Anchorage To La Paz.jpg";
import Singapore from "../assets/images/popular/Discover Singapore.png";
import Kiwiana from "../assets/images/popular/Kiwiana Panorama.jpg";
import Quito from "../assets/images/popular/Anchorage To Quito.jpg";
import Cuzco from "../assets/images/popular/Cuzco To Anchorage.jpg";
import Ushuaia from "../assets/images/popular/Anchorage To Ushuaia.jpg";
import Santiago from "../assets/images/popular/Anchorage To Santiago.jpg";
import Explorer from "../assets/images/popular/LA Explorer.jpg";

// tour detail img
import image1 from "../assets/images/new/singapore1.jpeg";
import image2 from "../assets/images/new/2.jpg";
import image3 from "../assets/images/new/3.jpg";
import image4 from "../assets/images/new/4.jpg";
import image5 from "../assets/images/new/5.jpg";
import image6 from "../assets/images/new/6.jpg";
import image7 from "../assets/images/new/7.jpg";
import image8 from "../assets/images/new/8.jpg";

export const destinationsData = [
  {
    id: 0,
    name: "Bali",
    tours: "5 tours and activities",
    image: tour5,
    link: "tour-name",
    shortDes: "",
  },
  {
    id: 1,
    name: "Tokyo",
    tours: "9 tours and activities",
    image: tour4,
    link: "tour-name",
  },

  {
    id: 2,
    name: "Bangkok",
    tours: "5 tours and activities",
    image: tour6,
    link: "tour-name",
  },

  {
    id: 3,
    name: "Cancun",
    tours: "4 tours and activities",
    image: tour7,
    link: "tour-name",
  },
  {
    id: 4,
    name: "Nha Trang",
    tours: "9 tours and activities ",
    image: tour8,
    link: "tour-name",
  },
  {
    id: 5,
    name: "Phuket",
    tours: "4 tours and activities",
    image: tour9,
    link: "tour-name",
  },
  {
    id: 6,
    name: "Paris",
    tours: "6 tours and activities",
    image: tour10,
    link: "tour-name",
  },
  {
    id: 7,
    name: "Malaysia",
    tours: "4 tours and activities",
    image: tour11,
    link: "tour-name",
  },
];

export const popularsData = [
  {
    id: 0,
    title: "Discover Singapore",
    image: Singapore,
    location: "European Way, Southampton, United Kingdom",
    category: ["Escorted Tour", "Rail Tour"],
    days: "5 days - 4 nights",
    price: 100,
    afterDiscount: 92,
    rating: 3,
    reviews: 5,
  },
  {
    id: 1,
    title: "Kiwiana Panorama",
    image: Kiwiana,
    location: "European Way, Southampton, United Kingdom",
    category: ["River Cruise", "Wildlife"],
    days: "2 days - 1 nights",
    price: 87,
    afterDiscount: 82,
    rating: 4,
    reviews: 9,
  },
  {
    id: 2,
    title: "Anchorage To Quito",
    image: Quito,
    location: "European Way, Southampton, United Kingdom",
    category: ["Escorted Tour", "River Cruise"],
    days: "2 days - 1 nights",
    price: 87,
    afterDiscount: 82,
    rating: 4,
    reviews: 9,
  },
  {
    id: 3,
    title: "Anchorage To La Paz",
    image: Anchorage,
    location: "European Way, Southampton, United Kingdom",
    category: ["River Cruise", "Rail Tour"],
    days: "unlimited",
    price: 434,
    afterDiscount: 0,
    rating: 5,
    reviews: 20,
  },
  {
    id: 4,
    title: "Cuzco To Anchorage",
    image: Cuzco,
    location: "European Way, Southampton, United Kingdom",
    category: ["River Cruise", "Tour & Cruise"],
    days: "1 days - 9 hours",
    price: 395,
    afterDiscount: 0,
    rating: 3,
    reviews: 12,
  },
  {
    id: 5,
    title: "Anchorage To Ushuaia",
    image: Ushuaia,
    location: "European Way, Southampton, United Kingdom",
    category: ["Escorted Tour", "Wildlife"],
    days: "5 days - 4 nights",
    price: 93,
    afterDiscount: 0,
    rating: 3,
    reviews: 12,
  },
  {
    id: 6,
    title: "Anchorage To Santiago",
    image: Santiago,
    location: "European Way, Southampton, United Kingdom",
    category: ["Escorted Tour", "Wildlife"],
    days: "1 day - 1 night",
    price: 42,
    afterDiscount: 0,
    rating: 5,
    reviews: 18,
  },
  {
    id: 7,
    title: "LA Explorer",
    image: Explorer,
    location: "European Way, Southampton, United Kingdom",
    category: ["Rail Tour", "Tour & Cruise"],
    days: "1 night",
    price: 99,
    afterDiscount: 0,
    rating: 4,
    reviews: 22,
  },
];

export const tourDetails = {
  title: "Discover Singapore",
  des: `Explore the vibrant city-state of Singapore, where modernity meets tradition. From breathtaking skyscrapers to lush gardens, discover all that Singapore has to offer.`,
  tourInfo: [
    '<strong className="font-bold">Place Covered</strong>: Singapore - Marina Bay, Sentosa Island',
    '<strong className="font-bold">Duration:</strong> 5 Days, 4 Nights',
    '<strong className="font-bold">Start Point:</strong> Changi Airport',
    '<strong className="font-bold">End Point:</strong> Changi Airport',
  ],
  highlights: [
    "Visit the iconic Marina Bay Sands and Gardens by the Bay.",
    "Experience the thrill of Sentosa Island with its beaches and attractions.",
    "Indulge in Singapore's renowned culinary delights.",
    "Explore cultural neighborhoods such as Little India and Chinatown.",
  ],
  itinerary: [
    {
      title: `<span class="me-1 fw-bold">Day 1:</span> Arrival in Singapore`,
      des: `Upon arrival at Changi Airport, you will be welcomed and transferred to your hotel. Spend the rest of the day at leisure, exploring the nearby attractions.`,
    },
    {
      title: `<span class="me-1 fw-bold">Day 2:</span> City Tour & Marina Bay`,
      des: `Enjoy a city tour, visiting key landmarks, and conclude your day with a stunning view of the sunset at Marina Bay.`,
    },
    {
      title: `<span class="me-1 fw-bold">Day 3:</span> Sentosa Island`,
      des: `Spend the day at Sentosa Island, enjoying the beaches and visiting attractions such as Universal Studios or S.E.A. Aquarium.`,
    },
    {
      title: `<span class="me-1 fw-bold">Day 4:</span> Cultural Exploration`,
      des: `Explore cultural neighborhoods like Little India and Chinatown. Discover local markets and taste traditional dishes.`,
    },
    {
      title: `<span class="me-1 fw-bold">Day 5:</span> Departure`,
      des: `Enjoy your last breakfast in Singapore before your transfer to Changi Airport for departure.`,
    },
  ],
  included: [
    'Accommodation for 4 nights in a centrally located hotel',
    'Daily breakfast as mentioned in the itinerary',
    'All transfers and tours as per the itinerary',
    'Professional English-speaking guide',
  ],
  exclusion: [
    'Lunch and dinner not included',
    'Personal expenses',
    'Travel insurance',
    'Airfare',
    'Any other services not mentioned in inclusions',
  ],
  images: [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: singaporeImage2,
      thumbnail: singaporeImage2,
    },
    {
      original: singaporeImage3,
      thumbnail: singaporeImage3,
    },
    {
      original: singaporeImage4,
      thumbnail: singaporeImage4,
    },
  ],
};

export const location = [
  "Bali",
  "Tokyo",
  "Bangkok",
  "Cancun",
  "Nha Trang",
  "Phuket",
  "Malaysia",
  "Paris",
];

export const Categories = [
  "History",
  "Calture",
  "Netural",
  "Urban Tour",
  "Relax",
];

export const Duration = ["1-3 Days", "3-5 Days", "5-7 Days", "7-10 Day"];
export const PriceRange = [
  "$ 0 - $50",
  "$ 50 - $ 100",
  "$ 100 - $ 200",
  "$ 200 - ₹ $ 400",
  "$ 400 - ₹ $ 800",
];

export const Ratings = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];
