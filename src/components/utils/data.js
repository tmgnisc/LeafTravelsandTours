// populars
import Anchorage from "../../assets/images/popular/Anchorage To La Paz.jpg";
import Singapore from "../../assets/images/popular/Discover Singapore.png";
import Kiwiana from "../../assets/images/popular/pokhara-valley-nepal.jpg";
import Quito from "../../assets/images/popular/nepal.jpeg";
import Cuzco from "../../assets/images/popular/bali.jpg";
import Ushuaia from "../../assets/images/popular/thailand.jpg";
import Santiago from "../../assets/images/popular/bangkok.jpg";
import Explorer from "../../assets/images/popular/LA Explorer.jpg";

// tour detail
import image1 from "../../assets/images/new/singapore3.jpeg";
import image2 from "../../assets/images/new/singapore2.jpeg";
import image3 from "../../assets/images/new/3.jpg";
import image4 from "../../assets/images/new/4.jpg";
import bali1 from "../../assets/images/popular/bali1.jpg";
import bali2 from "../../assets/images/popular/bali2.jpeg";
import bali3 from "../../assets/images/popular/bali3.jpeg";
import bali4 from "../../assets/images/popular/bali5.jpeg";
import thailand from "../../assets/images/popular/thailand1.jpg";
import kuala from "../../assets/images/popular/kualalumpur.jpg";
import kuala1 from "../../assets/images/popular/kuala.jpeg";
import bangkok from "../../assets/images/popular/bangkok.jpg";
import bangkok1 from "../../assets/images/popular/bangkok1.jpeg"
import phuket from "../../assets/images/popular/phuket.jpg"
import krabi from "../../assets/images/popular/krabi.jpeg"
import krabi1 from "../../assets/images/popular/krabi1.jpeg"

//for id 2 image
import PeacePagoda from "../../assets/images/popular/peace pagoda.jpg";
import lumbini from "../../assets/images/popular/lumbini.jpeg";
import hanumandhoka from "../../assets/images/popular/hanumandhoka.jpeg";
import devisfall from "../../assets/images/popular/devis fall.jpeg";

export const popularsData = [
  {
    id: 0,
    title: "Discover Singapore",
    image: Singapore,
    location: "Singapore",
    category: ["City Tour", ""], // Make sure the array is correctly formatted
    days: "5 days - 4 nights",
    price: 100,
    afterDiscount: 92,
    rating: 3,
    reviews: 5,
  },

  {
    id: 1,
    title: "Kathmandu, Pokhara & Nagarkot Adventure",
    image: Kiwiana, // Make sure you have the relevant image file.
    location: "Kathmandu, Pokhara, Nagarkot - Nepal",
    category: ["City Tour", "Adventure", "Cultural Tour"],
    days: "7 days - 6 nights",
    price: 650,
    afterDiscount: 600,
    rating: 4.5,
    reviews: 18,
  },
  {
    id: 2,
    title: "Nepal Package",
    image: Quito,
    location: "Kathmandu, Pokhara, Lumbini",
    category: ["", ""],
    days: "15 days - 14nights",
    price: 1200,
    afterDiscount: 900,
    rating: 4,
    reviews: 9,
  },
  {
    id: 3,
    title: "Bali Package",
    image: Cuzco,
    location: "Bali, Indonesia",
    category: ["", ""],
    days: "6 days - 5 nights",
    price: 1200,
    afterDiscount: 900,
    rating: 4,
    reviews: 9,
  },
  {
    id: 4,
    title: "Thailand, Malaysia and Sinagapore Packaage",
    image: Ushuaia,
    location: "Bangkok, Pattaya, Kuala Lumpur, Singapore",
    category: ["", ""],
    days: "10 days - 9 nights",
    price: 395,
    afterDiscount: 0,
    rating: 3,
    reviews: 12,
  },
  {
    id: 5,
    title: "Bangkok - krabi - phuket",
    image: Santiago,
    location: "Bangkok, krabi, phuket, thailand",
    category: ["", ""],
    days: "8 days - 7 nights",
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

export const tourDetails = [
  {
    id: 0,
    title: "Singapore Amazing Tour - 5 Days, 4 Nights",
    mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.623238975756!2d103.8536200504889!3d1.2833252000000048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19017cc9d37d%3A0x3b0a8fb1c768ed9f!2sSingapore!5e0!3m2!1sen!2snp!4v1726838764132!5m2!1sen!2snp",
    des: `Explore the vibrant city of Singapore with its stunning modern attractions, rich history, and diverse culture. From the iconic Merlion Park to the tranquil Gardens by the Bay, experience the best Singapore has to offer in this unforgettable 5-day tour.`,
    tourInfo: [
      '<strong className="font-bold">Places Covered:</strong> Merlion Park, Sentosa Island, Gardens by the Bay',
      '<strong className="font-bold">Duration:</strong> 5 Days, 4 Nights',
      '<strong className="font-bold">Start Point:</strong> Singapore Changi Airport',
      '<strong className="font-bold">End Point:</strong> Singapore Changi Airport',
    ],
    highlights: [
      "Explore Merlion Park and Singapore Flyer.",
      "Experience the excitement of Sentosa Island.",
      "Enjoy a visit to Madame Tussauds and ride the Cable Car.",
      "Visit the beautiful Gardens by the Bay.",
      "Discover the historical and modern attractions of Singapore."
    ],
    itinerary: [
      {
        title: `<span class="me-1 fw-bold">Day 1:</span> Arrival in Singapore`,
        des: `Upon arrival at Singapore Changi Airport, you will be greeted by our driver and transferred to your hotel for check-in. Relax and prepare for the exciting days ahead.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 2:</span> Singapore Half-Day City Tour`,
        des: `Start your day with a delicious breakfast at the hotel. Our guide will take you on a half-day city tour, where you'll visit the iconic Merlion Park and enjoy a photo stop at the Singapore Flyer. Explore landmarks like the Chinese Temple, Orchard Road, and the Parliament House.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 3:</span> Sentosa Island (Madame Tussauds, Cable Car, Sky Helix)`,
        des: `After breakfast, embark on a full-day adventure to Sentosa Island. Experience Madame Tussauds, take a breathtaking ride on the Singapore Cable Car, and enjoy panoramic views from Sky Helix, Singapore’s highest open-air gondola ride.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 4:</span> Gardens by the Bay (Flower Dome, Supertrees)`,
        des: `Visit the magnificent Gardens by the Bay, including the stunning Flower Dome and the iconic Supertrees. End your day with spectacular city views from the SkyPark Observation Deck, located on the 56th floor of the Marina Bay Sands Hotel.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 5:</span> Departure`,
        des: `After breakfast, check out from your hotel and transfer to Singapore Changi Airport for your departure. We hope you had an amazing time and look forward to welcoming you back.`,
      },
    ],
    included: [
      "Accommodation in selected hotels with daily breakfast.",
      "All ground transportation in an air-conditioned vehicle.",
      "English-speaking guide during the tour.",
      "Daily breakfast as per itinerary.",
      "Mineral water during excursions (2 bottles per person per day).",
    ],
    exclusion: [
      "Personal expenses and beverages.",
      "Travel insurance.",
      "International and domestic flights including airport taxes.",
      "Early check-in and late check-out surcharge.",
      "Meals and services not mentioned in the inclusions.",
      "Tipping for the guide and driver (suggested: $3/pax/day).",
      "Surcharges for public holidays and festive dinners on Christmas, New Year, and Lunar New Year.",
    ],
    images: [
      { original: image1, thumbnail: image1 },
      { original: image2, thumbnail: image2 },
      { original: image3, thumbnail: image3 },
      { original: image4, thumbnail: image4 },
    ],
  },
  
  {
    id: 1,
    title: "Kathmandu, Pokhara & Nagarkot Adventure",
    mapURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112488.4142434755!2d83.87421781379616!3d28.22969770665534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6cf823b25802164!2sPokhara!5e0!3m2!1sen!2snp!4v1726836533562!5m2!1sen!2snp",
    des: `Experience the stunning landscapes and rich culture of Kathmandu, Pokhara, and Nagarkot. From serene lakes to majestic mountains, this tour offers unforgettable experiences.`,
    tourInfo: [
      '<strong className="font-bold">Place Covered</strong>: Kathmandu, Pokhara, Nagarkot',
      '<strong className="font-bold">Duration:</strong> 7 Days, 6 Nights',
      '<strong className="font-bold">Start Point:</strong> Tribhuvan International Airport',
      '<strong className="font-bold">End Point:</strong> Tribhuvan International Airport',
    ],
    highlights: [
      "Sightseeing at Swayambhunath, Kathmandu Durbar Square, and more.",
      "Enjoy a breathtaking flight to Pokhara.",
      "Visit Devi's Fall and take a boat ride on Fewa Lake.",
      "Experience sunrise views from Sarangkot.",
      "Relax in the tranquil hill station of Nagarkot.",
    ],
    itinerary: [
      {
        title: `<span class="me-1 fw-bold">Day 1:</span> Arrive Kathmandu`,
        des: `It is a panoramic thrill flying into Kathmandu on a clear day. You will be greeted by stunning views of the snow-capped Himalayan peaks, beginning a memorable journey. After checking into your hotel, you will be briefed about your upcoming activities. The rest of the day is at leisure for you to explore or relax.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 2:</span> Explore Kathmandu`,
        des: `Start the day with a visit to Swayambhunath (the Monkey Temple), a stunning stupa with 2000 years of history. The tour continues with a visit to Kathmandu Durbar Square, home to the Hanuman Dhoka Royal Palace, the Living Goddess Kumari’s residence, and other historical monuments. Lastly, visit Patan Durbar Square, known for its Newari architecture and artistic charm. Return to your hotel for an overnight stay in Kathmandu.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 3:</span> Bhaktapur, Boudhanath & Pashupatinath`,
        des: `After breakfast, visit Bhaktapur Durbar Square, famous for the Palace of 55 Windows, the Golden Gate, and other ancient wonders. Next, explore Boudhanath Stupa, one of the largest and holiest Buddhist monuments. Conclude the day with a visit to Pashupatinath Temple, a sacred temple dedicated to Lord Shiva, located on the banks of the Bagmati River. Overnight at your hotel in Kathmandu.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 4:</span> Fly to Pokhara`,
        des: `Take a short flight to Pokhara, a natural paradise known for its serene lakes and majestic mountains. Upon arrival, you will be transferred to your hotel. Enjoy the day exploring the city at your leisure or take part in optional activities like boating on Fewa Lake. Overnight in Pokhara.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 5:</span> Sightseeing in Pokhara`,
        des: `Start your day early with a sunrise tour to Sarangkot, a hill station offering breathtaking views of the Annapurna and Dhaulagiri ranges. Later, visit Devi's Fall, an impressive waterfall, followed by a tour of Gupteshwor Mahadev Cave, one of the longest caves in South Asia. Wrap up the day with a tranquil boat ride on Fewa Lake. Overnight at your hotel in Pokhara.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 6:</span> Drive to Nagarkot`,
        des: `After breakfast, take a flight back to Kathmandu and drive to Nagarkot. Situated at an altitude of 2,195 meters, Nagarkot is known for its panoramic views of the Himalayas, including Mount Everest. It’s the perfect spot to relax and enjoy stunning sunset and sunrise views. Overnight at your hotel in Nagarkot.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 7:</span> Departure`,
        des: `After breakfast, drive back to Kathmandu. You will be transferred to the airport for your onward journey, leaving Nepal with unforgettable memories of your trip.`,
      },
    ],
    included: [
      "Accommodation at hotels in Kathmandu, Pokhara, and Nagarkot",
      "Daily breakfast as per itinerary",
      "All sightseeing tours and transfers by private air-conditioned vehicle",
      "Domestic airfare Kathmandu-Pokhara-Kathmandu",
    ],
    exclusion: [
      "Lunch and dinner not included",
      "Personal expenses",
      "Travel insurance",
      "Airfare for international flights",
      "Any other services not mentioned in inclusions",
    ],
    images: [
      { original: Kiwiana, thumbnail: Kiwiana },
      { original: PeacePagoda, thumbnail: PeacePagoda },
      { original: devisfall, thumbnail: devisfall },
      { original: hanumandhoka, thumbnail: hanumandhoka },
    ],
  },
  

  {
    id: 2, 
    title: "Nepal Package - 3, 7, and 15 Days Options",
    mapURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199364.63373768846!2d85.324!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191e5eb53c91%3A0x4e8f09f7eeec20d1!2sKathmandu!5e0!3m2!1sen!2snp!4v1695231782932!5m2!1sen!2snp",
    des: `Explore the wonders of Nepal with flexible tour options. Whether you prefer a quick 3-day trip, a 7-day adventure, or a full 15-day exploration, we have packages that cover the best destinations and experiences in Nepal.`,
    tourInfo: [
      '<strong className="font-bold">Places Covered:</strong> Kathmandu, Pokhara, Chitwan, Lumbini, Nagarkot, and more',
      '<strong className="font-bold">Duration Options:</strong> 3 Days, 7 Days, 15 Days',
      '<strong className="font-bold">Start Point:</strong> Tribhuvan International Airport, Kathmandu',
      '<strong className="font-bold">End Point:</strong> Tribhuvan International Airport, Kathmandu',
    ],
    highlights: [
      "Visit iconic UNESCO World Heritage Sites in Kathmandu.",
      "Explore the lakes and mountains of Pokhara.",
      "Embark on a jungle safari in Chitwan National Park.",
      "Discover the birthplace of Buddha in Lumbini.",
      "Enjoy panoramic views of the Himalayas from Nagarkot."
    ],
    itinerary: [
      {
        title: "<strong>3-Day Nepal Package:</strong>",
        des: `This short 3-day package offers a glimpse of Nepal's cultural and natural beauty.`,
        details: [
          {
            title: `<span class="me-1 fw-bold">Day 1:</span> Arrival in Kathmandu and Sightseeing`,
            des: `Arrive at Tribhuvan International Airport, Kathmandu. Transfer to the hotel and check-in. Visit Swayambhunath (Monkey Temple) for a panoramic view of the Kathmandu Valley. Explore Kathmandu Durbar Square, Hanuman Dhoka, and the Kumari House. Explore Thamel for shopping and dinner. Overnight stay in Kathmandu.`,
          },
          {
            title: `<span class="me-1 fw-bold">Day 2:</span> Kathmandu - Pokhara`,
            des: `Drive or fly to Pokhara. Visit Phewa Lake and Tal Barahi Temple. Stroll along the lakeside and enjoy the vibrant atmosphere. Overnight stay in Pokhara.`,
          },
          {
            title: `<span class="me-1 fw-bold">Day 3:</span> Pokhara Sightseeing and Departure`,
            des: `Early morning visit to Sarangkot for sunrise and mountain views. Return to the hotel for breakfast. Visit Davis Falls, Gupteshwor Cave, Pumdikot, and World Peace Pagoda. Fly back to Kathmandu. Transfer to Tribhuvan International Airport for departure. Tour ends.`,
          }
        ]
      },
      {
        title: "<strong>7-Day Nepal Package:</strong>",
        des: `This 7-day adventure takes you through the cultural and natural highlights of Nepal.`,
        details: [
          {
            title: `<span class="me-1 fw-bold">Day 1:</span> Arrival in Kathmandu`,
            des: `Arrive at Tribhuvan International Airport, Kathmandu. Transfer to the hotel and check-in. Visit Kathmandu Durbar Square, Hanuman Dhoka. Stroll around Thamel for shopping and dinner. Overnight stay in Kathmandu.`,
          },
          {
            title: `<span class="me-1 fw-bold">Day 2:</span> Kathmandu Sightseeing`,
            des: `Breakfast at the hotel. Early morning mountain flight to see Mount Everest. Visit Swayambhunath (Monkey Temple) for a panoramic view of the valley. Visit Pashupatinath and Bouddhanath Stupa. Leisure time in the evening. Overnight stay in Kathmandu.`,
          },
          {
            title: `<span class="me-1 fw-bold">Day 3:</span> Kathmandu to Pokhara`,
            des: `Breakfast at the hotel. Fly to Pokhara. Stroll around Fewa Lake and visit Tal Barahi Temple. Enjoy leisure time at the lakeside. Overnight stay in Pokhara.`,
          },
          {
            title: `<span class="me-1 fw-bold">Day 4:</span> Pokhara Sightseeing`,
            des: `Early morning drive to Sarangkot to enjoy the sunrise and mountain view. After breakfast, visit Davis Falls, Gupteshwor Cave, Pumdikot, and World Peace Pagoda. Overnight stay in Pokhara.`,
          },
          {
            title: `<span class="me-1 fw-bold">Day 5:</span> Pokhara to Lumbini`,
            des: `Breakfast at the hotel. Fly to Bhairahawa and transfer to Lumbini. Visit Mayadevi Temple, Peace Pagoda, and Shanti Deep. Overnight stay in Lumbini.`,
          },
          {
            title: `<span class="me-1 fw-bold">Day 6:</span> Lumbini Sightseeing`,
            des: `Breakfast at the hotel. Visit various international monasteries. Free exploration time in the afternoon. Overnight stay in Lumbini.`,
          },
          {
            title: `<span class="me-1 fw-bold">Day 7:</span> Lumbini to Kathmandu`,
            des: `Breakfast at the hotel. Drive to Bhairahawa for the flight back to Kathmandu. Enjoy a farewell program before transferring to Tribhuvan International Airport for departure. Tour ends.`,
          }
        ]
      },
      {
        title: "<strong>15-Day Nepal Package:</strong>",
        des: `A comprehensive 15-day tour that covers Nepal's natural beauty, cultural heritage, and adventure opportunities.`,
        details: [
          {
            title: `<span class="me-1 fw-bold">Day 1-2:</span> Kathmandu Exploration`,
            des: `Visit major sites such as Kathmandu Durbar Square, Pashupatinath, Bouddhanath, and Swayambhunath. Overnight in Kathmandu.`,
          },
          {
            title: `<span class="me-1 fw-bold">Day 3-4:</span> Fly to Pokhara & Sightseeing`,
            des: `Explore Pokhara, visiting Phewa Lake, Sarangkot, Davis Falls, Gupteshwor Cave, and World Peace Pagoda.`,
          },
          {
            title: `<span class="me-1 fw-bold">Day 5-6:</span> Lumbini Exploration`,
            des: `Visit the birthplace of Buddha and various monasteries in Lumbini.`,
          },
          {
            title: `<span class="me-1 fw-bold">Day 7-8:</span> Chitwan National Park`,
            des: `Enjoy a jungle safari and other activities at Chitwan National Park.`,
          },
          {
            title: `<span class="me-1 fw-bold">Day 9-10:</span> Bhaktapur and Patan`,
            des: `Explore the historic cities of Bhaktapur and Patan.`,
          },
          {
            title: `<span class="me-1 fw-bold">Day 11:</span> Nagarkot Sunrise`,
            des: `Drive to Nagarkot for a sunrise view of the Himalayas.`,
          },
          {
            title: `<span class="me-1 fw-bold">Day 12-14:</span> Cultural Immersion`,
            des: `Take part in traditional Nepali cultural activities and workshops.`,
          },
          {
            title: `<span class="me-1 fw-bold">Day 15:</span> Departure`,
            des: `Transfer to Tribhuvan International Airport for departure. Tour ends.`,
          }
        ]
      }
    ],
    included: [
      "Accommodation based on selected package duration",
      "Daily breakfast as per the itinerary",
      "All transfers and tours as per the itinerary",
      "Professional English-speaking guide for all sightseeing",
    ],
    exclusion: [
      "Lunch and dinner not included",
      "Personal expenses",
      "Travel insurance",
      "Airfare",
      "Any other services not mentioned in inclusions",
    ],
    images: [
      { original: PeacePagoda, thumbnail: PeacePagoda },
      { original: devisfall, thumbnail: devisfall },
    ],
  },
  
  

  {
    id: 3,
    title: "Bali Package 5N/6Days",
    mapURL:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126290.1358960535!2d115.092!3d-8.4095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24120710635eb%3A0xf84e25e109c88ce4!2sBali!5e0!3m2!1sen!2sid!4v1695293133820!5m2!1sen!2sid",
    des: `Enjoy the stunning landscapes and vibrant culture of Bali on this 5-night, 6-day tour. From lush rice terraces to pristine beaches and ancient temples, this tour covers the best of Bali.`,
    tourInfo: [
      '<strong className="font-bold">Places Covered:</strong> Ubud, Kintamani, Nusa Penida, Uluwatu, Kuta',
      '<strong className="font-bold">Duration:</strong> 6 Days, 5 Nights',
      '<strong className="font-bold">Start Point:</strong> Ngurah Rai International Airport, Bali',
      '<strong className="font-bold">End Point:</strong> Ngurah Rai International Airport, Bali',
    ],
    highlights: [
      "Explore the art and culture of Ubud, including Batik and wood carving.",
      "Witness the stunning views of Mount Batur from Kintamani.",
      "Indulge in water sports at Tanjung Benoa Beach.",
      "Tour the magnificent Uluwatu Temple on a cliffside.",
      "Discover the natural wonders of Nusa Penida, including Angel’s Billabong and Kelingking Beach.",
    ],
    itinerary: [
      {
        title: `<span class="me-1 fw-bold">Day 1:</span> Arrival in Bali`,
        des: `Pick up from Ngurah Rai International Airport and transfer to your hotel. Enjoy a free day to relax and explore Bali at your own pace.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 2:</span> Ubud - Kintamani Tour`,
        des: `After breakfast, visit Batubulan Village for a traditional Batik demonstration, followed by visits to Mas Village for wood carving and a Luwak coffee plantation. Head to Kintamani for spectacular views of Mount Batur and enjoy the Tegalalang Rice Terrace.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 3:</span> Water Sports & Uluwatu Temple`,
        des: `Enjoy water sports at Tanjung Benoa Beach, including Banana Boat and Rolling Donut rides. In the afternoon, visit the stunning Uluwatu Temple perched on a cliffside, with a beautiful sunset view.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 4:</span> Nusa Penida West Tour`,
        des: `Take a fast boat to Nusa Penida and explore Angel’s Billabong, Broken Beach, and Kelingking Beach. End the day with a visit to Crystal Bay before staying overnight on Nusa Penida.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 5:</span> Return to Kuta`,
        des: `After breakfast, transfer from Nusa Penida back to Bali and check in to your hotel in Kuta. Spend the rest of the day at leisure.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 6:</span> Departure`,
        des: `Check out of the hotel and transfer to the airport for your flight back home.`,
      },
    ],
    included: [
      "5 nights accommodation with breakfast",
      "Airport pick-up and drop-off",
      "Private transfers in Bali",
      "All entrance fees and tours as mentioned in the itinerary",
      "Water sports (Banana Boat, Rolling Donut)",
    ],
    exclusion: [
      "Lunch and dinner not included",
      "Personal expenses",
      "Tipping for driver and guide",
      "Travel insurance",
      "Airfare",
    ],
    images: [
      { original: bali1, thumbnail: bali1 },
      { original: bali2, thumbnail: bali2 },
      { original: bali3, thumbnail: bali3 },
      { original: bali4, thumbnail: bali4 },
    ],
  },
  
  {
    id: 4,
    title: "Thailand, Malaysia, and Singapore - 9 Nights / 10 Days Package",
    mapURL:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195114.7466535837!2d98.30085874363544!3d8.540192745786438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305042f2af488ab1%3A0x7f686163593dcbf5!2sPhuket%2C%20Thailand!5e0!3m2!1sen!2snp!4v1695232947214!5m2!1sen!2snp",
    des: `Explore the beauty and diversity of Thailand, Malaysia, and Singapore in this 9-night, 10-day tour. Experience vibrant cultures, stunning landscapes, and delicious cuisines across these three incredible countries.`,
    tourInfo: [
      '<strong className="font-bold">Places Covered:</strong> Bangkok, Pattaya, Kuala Lumpur, Singapore',
      '<strong className="font-bold">Duration:</strong> 10 Days, 9 Nights',
      '<strong className="font-bold">Start Point:</strong> Bangkok',
      '<strong className="font-bold">End Point:</strong> Kathmandu, Nepal',
    ],
    highlights: [
      "Relax on the stunning beaches of Pattaya.",
      "Explore the cultural gems of Bangkok, including the Grand Palace and Wat Pho.",
      "Experience the iconic skyline of Kuala Lumpur with its Petronas Twin Towers.",
      "Discover the vibrant food scene and attractions of Singapore, including Sentosa Island.",
      "Visit the breathtaking Batu Caves and Genting Highlands.",
    ],
    itinerary: [
      {
        title: `<span class="me-1 fw-bold">Day 1:</span> Arrival in Bangkok and Transfer to Pattaya`,
        des: `Upon your arrival in Bangkok, a representative will assist you with the transfer to Pattaya. Check in to your hotel and enjoy the rest of the day at leisure. Overnight stay at the hotel.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 2:</span> Coral Island Day Tour in Pattaya`,
        des: `After breakfast, embark on a Coral Island Day Tour. Enjoy snorkeling, water sports, and relaxing on beautiful beaches. Lunch will be provided on the island. Return to your hotel for an overnight stay.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 3:</span> Transfer to Bangkok and City Tour`,
        des: `Enjoy breakfast and then check out. Transfer to Bangkok for a half-day city tour, exploring temples like Wat Pho and Wat Arun. Check in to your hotel in Bangkok for an overnight stay.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 4:</span> Free Day for Shopping in Bangkok`,
        des: `Indulge in a shopping day at markets and malls in Bangkok. Discover unique treasures at Chatuchak Weekend Market and enjoy modern shopping at Siam Paragon. Overnight stay at the hotel.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 5:</span> Flight to Singapore and Leisure Day`,
        des: `After breakfast, check out and fly to Singapore. Upon arrival, transfer to your hotel. Enjoy the rest of the day to relax and explore the city at your leisure. Overnight stay in Singapore.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 6:</span> Singapore City Tour and Sentosa Island`,
        des: `Start your day with a city tour of Singapore, visiting Merlion Park, Chinatown, and Little India. In the afternoon, head to Sentosa Island for thrilling attractions. Overnight stay at the hotel.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 7:</span> Transfer to Kuala Lumpur`,
        des: `After breakfast, check out and travel by coach to Kuala Lumpur. Check in to your hotel and enjoy the rest of the day at leisure. Overnight stay at the hotel.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 8:</span> Genting Highlands and Batu Caves Tour`,
        des: `Embark on a full-day tour to Genting Highlands and Batu Caves. Enjoy breathtaking views and explore the famous limestone caves. Return to your hotel for an overnight stay.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 9:</span> Free Day at Leisure`,
        des: `Enjoy a free day to explore at your own pace. Visit local markets, savor street food, and discover the vibrant culture of Kuala Lumpur. Overnight stay at the hotel.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 10:</span> Departure to Nepal`,
        des: `After breakfast, check out from the hotel and transfer to the airport for your flight back to Nepal.`,
      },
    ],
    included: [
      "Round trip air ticket",
      "Malaysia E-Visa",
      "Thailand Tourist Visa",
      "Singapore Visa on Arrival",
      "Meet and greet at the airport",
      "Airport – Hotel – Airport Transfers",
      "03 Nights accommodation in Malaysia",
      "02 Nights accommodation in Singapore",
      "04 Nights accommodation in Thailand",
      "Daily Breakfast at the Hotel",
      "Kuala Lumpur Half-day City tour",
      "Genting Highland and Batu Cave tour in Malaysia",
      "Singapore to Malaysia by Coach",
      "Sentosa Experiential Tour in Singapore",
      "Bangkok City Tour",
      "Half-day Coral Island Tour with lunch",
      "All transfer and sightseeing by air-conditioned vehicle",
    ],
    exclusion: [
      "Any meal not mentioned in the above program",
      "Any expenses of personal nature such as drinks, laundry, telephone calls, insurance",
      "Video/Still/Camera Fee / Excess Baggage / Emergency/Medical cost",
      "Any other expenses caused due to unforeseen circumstances",
      "Any tips during the tour for driver/guide",
    ],
    images: [
      { original: krabi, thumbnail: krabi }, // Replace with actual paths
      { original: phuket, thumbnail: phuket },
      { original: krabi1, thumbnail: krabi1 },
      { original: bangkok1, thumbnail: bangkok1 },
    ],
  },

  {
    id: 5,
    title: "Bangkok – Krabi – Phuket - 7 Nights / 8 Days Package",
    mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126290.1358960535!2d101.6869!3d3.139!", // Update this with a relevant map URL
    des: `Embark on an unforgettable adventure with Leaf Travels and Tours as you explore the stunning destinations of Bangkok, Krabi, and Phuket. Discover breathtaking sights and create lasting memories during this 7-night, 8-day journey.`,
    tourInfo: [
      '<strong className="font-bold">Places Covered:</strong> Bangkok, Krabi, Phuket',
      '<strong className="font-bold">Duration:</strong> 8 Days, 7 Nights',
      '<strong className="font-bold">Hotel Category:</strong> 3 Star***',
      '<strong className="font-bold">Meal Plan:</strong> BB (Bed and Breakfast)',
    ],
    highlights: [
      "Explore Bangkok's cultural gems, including the Golden Buddha Temple and Marvel Temple.",
      "Experience the beauty of the Four Islands with an exciting tour and lunch.",
      "Relax on the stunning beaches of Krabi and Phuket.",
      "Enjoy the Phi-Phi Island tour with a delicious lunch.",
      "Free day in Bangkok for personal exploration and leisure.",
    ],
    itinerary: [
      {
        title: `<span class="me-1 fw-bold">Day 1:</span> Arrive in Bangkok. Transfer to Hotel`,
        des: `Arrive in Bangkok, where our representative will pick you up and transfer you to your hotel. Check in and enjoy an overnight stay.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 2:</span> Bangkok City Tour. Transfer to Krabi by Flight`,
        des: `Enjoy breakfast at the hotel, check out, and embark on a city tour of Bangkok, visiting the Golden Buddha Temple and Marvel Temple. Transfer to Krabi by flight and check in to your hotel for an overnight stay.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 3:</span> Four Island Tour with Lunch`,
        des: `After breakfast, enjoy a Four Island tour with lunch, visiting stunning locations such as Poda Island, Chicken Island, Tup Island, and Phra Nang Cave Beach. Return to your hotel in Krabi for an overnight stay.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 4:</span> Transfer to Phuket by Road`,
        des: `Enjoy breakfast, check out from the Krabi hotel, and transfer to Phuket, approximately a 4-hour drive. Check in to your hotel in Phuket for an overnight stay.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 5:</span> Phi-Phi Island Tour with Lunch`,
        des: `After breakfast, embark on the Phi-Phi Island tour, visiting Maya Bay, snorkeling at Monkey Beach, and enjoying a beach BBQ lunch. Overnight stay in Phuket.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 6:</span> Transfer to Bangkok`,
        des: `Enjoy breakfast, check out from the Phuket hotel, and transfer back to Bangkok. Check in to your hotel for an overnight stay.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 7:</span> Free Day`,
        des: `After breakfast, enjoy a free day at your leisure in Bangkok. Explore shopping, cultural sites, or relax at a spa. Overnight stay at the hotel.`,
      },
      {
        title: `<span class="me-1 fw-bold">Day 8:</span> Departure`,
        des: `Enjoy breakfast, check out from the hotel, and transfer to the airport for your departure. Tour ends.`,
      },
    ],
    
    included: [
      "3 nights accommodation in Bangkok at a 3 Star hotel",
      "2 nights accommodation in Krabi at a 3 Star hotel",
      "2 nights accommodation in Phuket at a 3 Star hotel",
      "Daily breakfast",
      "Visa fee",
      "Airfare",
      "Airport drop and pick up",
      "All surface transportation",
      "Bangkok city tour: Golden Buddha Temple and Marvel Temple",
      "Four Island tour with lunch",
      "Phi-Phi Island tour with lunch",
    ],
    exclusion: [
      "Any meal not mentioned in the above program",
      "Any expenses of personal nature such as drinks, laundry, telephone calls, insurance",
      "Video/Still/Camera Fee / Excess Baggage / Emergency/Medical cost",
      "Any other expenses caused due to unforeseen circumstances",
      "Any tips during the tour for driver/guide",
    ],
    images: [
      { original: phuket, thumbnail: phuket },
      { original: kuala, thumbnail: kuala },
      { original: krabi, thumbnail: krabi },
      { original: bangkok, thumbnail: bangkok },
    ],
  }
  
  
];
