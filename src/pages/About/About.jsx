import React, { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col, Card, Nav, Tab } from "react-bootstrap";
import "./about.css";
import AboutImg from "../../assets/images/about/aboutimg.png";
import icons1 from "../../assets/images/icons/destination.png";
import icons2 from "../../assets/images/icons/best-price.png";
import icons3 from "../../assets/images/icons/quick.png";
import image1 from "../../assets/images/new/nepalbeauty.jpg";

const About = () => {
  const [key, setKey] = useState("aboutNepal"); // Set default tab to 'About Nepal'

  const content = {
    english: {
      intro:
        "Welcome to Leaf Travels and Tours, where we celebrate the richness of global cultures and experiences. Since 2015, we have been crafting bespoke travel experiences that allow our clients to connect with the heart and soul of each destination. Whether you're seeking a relaxing getaway or a thrilling adventure, we specialize in tailoring each journey to your unique preferences. From luxury to budget travel, we take care of all the details, ensuring your vacation is seamless and stress-free. Our expertise spans across the globe, from serene island escapes to bustling urban cities. Your journey with us isn't just about visiting new places – it's about creating lifelong memories that go beyond the ordinary. With Leaf Travels and Tours, your next adventure starts here.",
      whyChooseUs: [
        "Personalized Travel Plans: Every traveler is unique, and so should be their journey. We take the time to understand your preferences, whether it's a romantic getaway, a family vacation, or an adventurous trek. Our dedicated travel consultants work with you to create a tailor-made itinerary that fits your style and needs, ensuring every aspect of your trip is customized for you.",
        "Affordable Packages: Dream vacations don’t need to break the bank. We offer a wide range of travel packages designed to suit different budgets. From luxury retreats to cost-effective family tours, we provide the best value for your money, giving you access to exclusive deals, discounted rates, and high-quality services without compromising on the experience.",
        "Expert Knowledge of Destinations: With years of experience in the travel industry, our team of travel experts has in-depth knowledge of each destination we offer. We provide insider tips, local insights, and unique experiences that are often missed by ordinary travelers. Whether it’s a hidden gem in Europe or a cultural festival in Asia, we ensure that you explore the true essence of every location.",
        "Seamless Travel Experience: At Leaf Travels and Tours, we believe that your travel experience should be enjoyable from start to finish. That’s why we handle everything, from airport transfers and accommodations to guided tours and dining reservations. Our attention to detail ensures a hassle-free trip, allowing you to relax and fully immerse yourself in your destination.",
        "24/7 Customer Support: Travel is full of surprises, but we’ve got you covered. Our customer support team is available 24/7 to assist you with any inquiries or changes that may arise during your journey. Whether you need help rebooking a flight or finding local attractions, we’re just a phone call away, ensuring your trip runs smoothly at all times.",
        "Global Network of Partnerships: Over the years, we’ve built strong relationships with hotels, airlines, local tour operators, and other service providers around the world. This allows us to offer our clients special perks like room upgrades, priority access to events, and exclusive excursions. Traveling with Leaf Travels means enjoying privileges that make your trip extra special.",
        "Sustainable and Responsible Travel: We are committed to promoting sustainable tourism practices that minimize environmental impact and support local communities. We partner with eco-friendly hotels, and encourage activities that respect nature and cultural heritage. By choosing us, you’re not only creating unforgettable memories but also contributing to the preservation of our planet for future generations.",
      ],
    },
    nepali: {
      intro:
        "लीफ ट्राभल्स र टुरमा स्वागत छ, हामी संसारभरको संस्कृति को समृद्धिमा मनाउँछौं। २०१५ देखि, हाम्रो misión यात्रुहरूलाई प्रत्येक गन्तव्यको मुटु र आत्मासँग जडान गर्न हो। तपाईंको अविस्मरणीय साहसिक कार्यको ढोका, हामीले अनुकूलित यात्रा, सस्तो प्याकेज र उत्कृष्ट सेवा प्रस्ताव गर्दछौं जसले तपाईंको यात्रा तनावमुक्त र रमाइलो बनाउँछ। हाम्रो जानकार टोलीले स्थानीय परम्परा, खाना र इतिहासमा संलग्न हुने अनुभवहरू सिर्जना गर्दछ। चाहे तपाईं प्राचीन खण्डहरहरू वा जीवन्त बजारहरू अन्वेषण गर्न खोज्दै हुनुहुन्छ, हामी तपाईंलाई खोजको यात्रा मार्गनिर्देशन गर्न यहाँ छौं। लीफ ट्राभल्स र टुरहरूसँग, तपाईंको अर्को साहसिक कार्य केवल एक क्लिक टाढा छ。",
      whyChooseUs: [
        "व्यक्तिगत यात्रा योजनाहरू: प्रत्येक यात्री अद्वितीय हुन्छ, र तिनीहरूको यात्रा पनि त्यस्तै हुनु पर्छ। हामी तपाईंको प्राथमिकताहरूलाई बुझ्न समय लिन्छौं, चाहे त्यो प्रेमपूर्ण छुट्टी होस्, परिवारसँगको यात्रा होस्, वा साहसिक ट्रेक होस्। हाम्रा समर्पित यात्रा सल्लाहकारहरूले तपाईंको शैली र आवश्यकताहरू अनुसार विशेष रूपमा निर्मित यात्रा तालिका बनाउँछन्।",
        "सस्तो प्याकेजहरू: सपना छुट्टीहरूको लागि धेरै खर्च गर्नुपर्दैन। हामी विभिन्न बजेटहरूलाई ध्यानमा राखेर तयार पारिएका यात्रा प्याकेजहरूको विस्तृत दायरा प्रस्ताव गर्दछौं।",
        "गन्तव्यहरूको विशेषज्ञ ज्ञान: हाम्रो टोलीसँग प्रत्येक गन्तव्यको गहिरो ज्ञान छ। हामीले सामान्य यात्रुहरूले छुटाउन सक्ने विशेष अनुभवहरू प्रदान गर्दछौं।",
        "सहज यात्रा अनुभव: हामी विश्वास गर्छौं कि तपाईंको यात्रा अनुभव सुरु देखि अन्त्य सम्म रमाइलो हुनुपर्छ। त्यसैले हामी सबै कुरा सम्हाल्छौं।",
        "२४/७ ग्राहक समर्थन: यात्रा अनपेक्षित घटनाहरूले भरिएको हुन्छ, तर हामी तपाईंलाई कभर गरेका छौं।",
        "विश्वव्यापी साझेदारीहरू: वर्षौंमा, हामीले बलियो सम्बन्ध बनाएका छौं, जसले हाम्रा ग्राहकहरूलाई विशेष सुविधाहरू प्रदान गर्न अनुमति दिन्छ।",
        "दिगो र जिम्मेवार यात्रा: हामी दिगो पर्यटन अभ्यासहरूलाई प्रोत्साहन गर्न प्रतिबद्ध छौं, जसले वातावरणीय प्रभावलाई कम गर्दछ।",
      ],
    },

    aboutNepal: {
      intro:
        "Nepal, a land of mesmerizing beauty and rich cultural heritage, offers an unparalleled travel experience. From the snow-capped peaks of the Himalayas to the lush jungles of the Terai, Nepal is a paradise for adventure seekers and cultural enthusiasts alike. Whether you're trekking to the base of Mount Everest, exploring ancient temples in Kathmandu, or embarking on a jungle safari in Chitwan, Nepal promises unforgettable memories. With Leaf Travels and Tours, you can explore this enchanting country through expertly curated tours that immerse you in the best of Nepal's natural beauty, vibrant traditions, and warm hospitality.",
      highlights: [
        "Home to the highest mountain in the world, Mount Everest.",
        "Cultural diversity with hundreds of ethnic groups and languages.",
        "UNESCO World Heritage sites like Kathmandu Durbar Square, Swayambhunath, and Bhaktapur.",
        "A haven for trekkers with popular routes such as the Annapurna Circuit and Everest Base Camp.",
        "Rich biodiversity, with national parks like Chitwan and Bardia, home to tigers, rhinos, and elephants.",
        "A spiritual hub with sacred sites like Lumbini, the birthplace of Lord Buddha.",
        "Delicious cuisine featuring unique flavors, including momo and dal bhat.",
        "Vibrant festivals celebrated throughout the year, showcasing Nepal's rich traditions.",
      ],
      image: {
        src: image1,
        alt: "Stunning view of the Himalayas in Nepal",
      },
    },
  };

  return (
    <>
      <Breadcrumbs
        title="About us"
        pagename="About us"
        childnamed="d-none"
        additionalText="Embark on your next adventure with LEAF TRAVELS AND TOURS. Discover breathtaking destinations, create unforgettable memories, and let us be your guide to the world’s wonders, where every journey is a story waiting to be told."
      />
      <section className="about">
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="about-content">
                <div className="about-image position-relative">
                  <img src={AboutImg} alt="" className="img-fluid rounded-5" />
                  <div className="about-image-content position-absolute top-50 end-0 p-md-4 p-3 rounded-5 shadow-sm">
                    <h3 className="h2 fw-bold text-white">
                      WE ARE BEST FOR TOURS TRAVEL !
                    </h3>
                  </div>
                </div>

                <Tab.Container
                  id="language-tabs"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                >
                  <Nav
                    variant="pills"
                    className="flex-row nav_bars rounded-2 mt-4"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="aboutNepal">About Nepal</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="english">English</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="nepali">नेपाली</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content className="mt-4">
                    <Tab.Pane eventKey="aboutNepal">
                      <h2 className="h2 pt-4 pb-2 font-bold">
                        Explore the Wonders of Nepal
                      </h2>
                      <p className="body-text mb-2">
                        {content.aboutNepal.intro}
                      </p>
                      <h5 className="font-bold mb-2">Highlights</h5>
                      <ul className="body-text mb-2">
                        {content.aboutNepal.highlights.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                      <img
                        src={content.aboutNepal.image.src}
                        alt={content.aboutNepal.image.alt}
                        className="img-fluid rounded-5 mb-4"
                      />
                    </Tab.Pane>

                    <Tab.Pane eventKey="english">
                      <h2 className="h2 pt-4 pb-2 font-bold">
                        Explore with us
                      </h2>
                      <p className="body-text mb-2">{content.english.intro}</p>
                      <h5 className="font-bold mb-2">Why Choose Us?</h5>
                      <ul className="body-text mb-2">
                        {content.english.whyChooseUs.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="nepali">
                      <h2 className="h2 pt-4 pb-2 font-bold">
                        हामी संग किन यात्रा गर्ने त ?
                      </h2>
                      <p className="body-text mb-2">{content.nepali.intro}</p>
                      <h5 className="font-bold mb-2">
                        हामीलाई छान्नुको कारण ?
                      </h5>
                      <ul className="body-text mb-2">
                        {content.nepali.whyChooseUs.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Col>

            <Col lg="4" md="4">
              {/* Cards Section */}
              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2 ">
                    <div className="bg-light shadow-sm bg-opacity-10  rounded-circle mb-2 flex-centered p-2">
                      <img src={icons1} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">
                    50+ Destinations
                  </Card.Title>
                  <p className="mb-2 body-text">
                    Explore over 50 breathtaking destinations around the world,
                    tailored to suit every traveler's desire.
                  </p>
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2 ">
                    <div className="bg-light shadow-sm bg-opacity-10 text-info rounded-circle mb-2 flex-centered p-2">
                      <img src={icons2} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">
                    Best Price Guarantee
                  </Card.Title>
                  <p className="mb-2 body-text">
                    We offer competitive pricing, ensuring you get the best
                    value for your money.
                  </p>
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2 ">
                    <div className="bg-light shadow-sm bg-opacity-10 text-info rounded-circle mb-2 flex-centered p-2">
                      <img src={icons3} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">
                    Quick Booking
                  </Card.Title>
                  <p className="mb-2 body-text">
                    Easy and efficient booking process, ensuring you spend less
                    time planning and more time enjoying your trip.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
