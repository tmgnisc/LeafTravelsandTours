import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col, Card, Nav, Tab } from "react-bootstrap";
import "./about.css";
import icons1 from "../../assets/images/icons/destination.png";
import icons2 from "../../assets/images/icons/best-price.png";
import icons3 from "../../assets/images/icons/quick.png";

const About = () => {
  const [key, setKey] = useState("aboutNepal"); // Default tab
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    // Fetch about page content from API
    const fetchAboutData = async () => {
      try {
        const response = await fetch("https://admin.leaftravelsandtour.com/api/about_us/1/");
        const data = await response.json();
        setAboutData(data);
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

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
                {aboutData && aboutData.aboutNepal && (
                  <div className="about-image position-relative">
                    <img
                      src={aboutData.aboutNepal[0].image}
                      alt="About Nepal"
                      className="img-fluid rounded-5"
                    />
                    <div className="about-image-content position-absolute top-50 end-0 p-md-4 p-3 rounded-5 shadow-sm">
                      <h3 className="h2 fw-bold text-white">
                        {aboutData.aboutNepal[0].main_heading}
                      </h3>
                    </div>
                  </div>
                )}

                {/* Tabs for About Nepal, English, and Nepali Content */}
                <Tab.Container id="language-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
                  <Nav variant="pills" className="flex-row nav_bars rounded-2 mt-4">
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
                    {/* About Nepal Tab */}
                    <Tab.Pane eventKey="aboutNepal">
                      {aboutData && aboutData.aboutNepal && (
                        <>
                          <h2 className="h2 pt-4 pb-2 font-bold">
                            {aboutData.aboutNepal[0].main_heading}
                          </h2>
                          <p className="body-text mb-2">{aboutData.aboutNepal[0].content}</p>
                          <h5 className="font-bold mb-2">{aboutData.aboutNepal[0].subheading}</h5>
                          <ul className="body-text mb-2">
                            {aboutData.aboutNepal[0].subcontent.split("\r\n").map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                          <img
                            src={aboutData.aboutNepal[0].image}
                            alt="Nepal Beauty"
                            className="img-fluid rounded-5 mb-4"
                          />
                        </>
                      )}
                    </Tab.Pane>

                    {/* English Tab */}
                    <Tab.Pane eventKey="english">
                      {aboutData && aboutData.english && (
                        <>
                          <h2 className="h2 pt-4 pb-2 font-bold">
                            {aboutData.english[0].main_heading}
                          </h2>
                          <p className="body-text mb-2">{aboutData.english[0].content}</p>
                          <h5 className="font-bold mb-2">{aboutData.english[0].subheading}</h5>
                          <ul className="body-text mb-2">
                            {aboutData.english[0].subcontent.split("\r\n").map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </Tab.Pane>

                    {/* Nepali Tab */}
                    <Tab.Pane eventKey="nepali">
                      {aboutData && aboutData.nepali && (
                        <>
                          <h2 className="h2 pt-4 pb-2 font-bold">
                            {aboutData.nepali[0].main_heading}
                          </h2>
                          <p className="body-text mb-2">{aboutData.nepali[0].content}</p>
                          <h5 className="font-bold mb-2">{aboutData.nepali[0].subheading}</h5>
                          <ul className="body-text mb-2">
                            {aboutData.nepali[0].subcontent.split("\r\n").map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Col>

            {/* Right Side - Features Section */}
            <Col lg="4" md="4">
              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2">
                    <div className="bg-light shadow-sm bg-opacity-10 rounded-circle mb-2 flex-centered p-2">
                      <img src={icons1} alt="Destination Icon" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">50+ Destinations</Card.Title>
                  <p className="mb-2 body-text">
                    Explore over 50 breathtaking destinations around the world, tailored to suit every traveler’s desire.
                  </p>
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2">
                    <div className="bg-light shadow-sm bg-opacity-10 text-info rounded-circle mb-2 flex-centered p-2">
                      <img src={icons2} alt="Best Price" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">Best Price Guarantee</Card.Title>
                  <p className="mb-2 body-text">
                    We offer competitive pricing, ensuring you get the best value for your money.
                  </p>
                </Card.Body>
              </Card>

              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2">
                    <div className="bg-light shadow-sm bg-opacity-10 text-info rounded-circle mb-2 flex-centered p-2">
                      <img src={icons3} alt="Quick Booking" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">Quick Booking</Card.Title>
                  <p className="mb-2 body-text">
                    Easy and efficient booking process, ensuring you spend less time planning and more time enjoying your trip.
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
