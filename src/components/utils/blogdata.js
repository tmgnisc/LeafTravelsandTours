// src/utils/blogData.js
import blogImage1 from "../../assets/images/new/blogimage1.jpg"; // Replace with actual image paths
import blogImage2 from "../../assets/images/new/nepalbeauty.jpg";
import blogImage3 from "../../assets/images/popular/thailand.jpg";

const blogData = [
    {
        id: 1,
        title: "Discovering Hidden Gems: The Joy of Off-the-Beaten-Path Travel",
        image: blogImage1, // Add the path to your image here
        description: "Explore unique travel experiences beyond popular landmarks.",
        content: `
          <h2>Discovering Hidden Gems: The Joy of Off-the-Beaten-Path Travel</h2>
          <p>Traveling isn't just about visiting popular landmarks; it's about discovering hidden gems that tell the true story of a place. From quaint villages tucked away in the mountains to serene beaches that aren't flooded with tourists, off-the-beaten-path travel offers unique experiences that create lasting memories. Exploring these less-traveled routes allows you to immerse yourself in local culture, taste authentic cuisine, and connect with the people who call these places home. Whether it's hiking through lush forests or wandering through bustling local markets, venturing beyond the tourist traps not only enriches your journey but also supports local economies. So, pack your bags and embrace the thrill of exploration—there's a whole world waiting to be discovered just off the main road!</p>
        `,
      },
  {
    id: 2,
    title: "Exploring the Beauty of Nepal",
    description: "Discover the must-visit places in Nepal for an unforgettable experience.",
    image: blogImage2,
    content: `
      <h2>Kathmandu</h2>
      <p>The capital city offers rich culture and history. Explore the ancient temples and vibrant markets.</p>
      <h2>Pokhara</h2>
      <p>Known for its stunning lakes and mountain views, Pokhara is perfect for adventure seekers and relaxation.</p>
      <h2>Lumbini</h2>
      <p>A UNESCO World Heritage site, Lumbini is the birthplace of Buddha and a place for spiritual reflection.</p>
      <h2>Chitwan National Park</h2>
      <p>Experience wildlife and nature through safari tours in this renowned national park.</p>
      <h2>Everest Base Camp Trek</h2>
      <p>For adventure enthusiasts, trekking to Everest Base Camp offers breathtaking views and an unforgettable challenge.</p>
    `,
  },
  {
    id: 3,
    title: "Culinary Delights: Must-Try Foods in Thailand",
    description: "Explore the delicious dishes that Thailand has to offer.",
    image: blogImage3,
    content: `
      <h2>Pad Thai</h2>
      <p>A stir-fried noodle dish commonly served as street food, Pad Thai is a must-try when in Thailand.</p>
      <h2>Tom Yum Goong</h2>
      <p>This hot and sour soup is made with shrimp and is packed with flavor and spices.</p>
      <h2>Green Curry</h2>
      <p>A fragrant and spicy curry made with green chilies, coconut milk, and various meats or vegetables.</p>
      <h2>Mango Sticky Rice</h2>
      <p>A sweet dessert made with glutinous rice, fresh mango, and coconut milk.</p>
      <h2>Som Tum</h2>
      <p>This spicy green papaya salad is refreshing and a perfect balance of sweet, sour, and spicy.</p>
    `,
  },
  // Add more blog entries as needed
];

export default blogData;
