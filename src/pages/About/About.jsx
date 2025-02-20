import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col, Card, Nav, Tab } from "react-bootstrap";
import "./about.css";
import icons1 from "../../assets/images/icons/destination.png";
import icons2 from "../../assets/images/icons/best-price.png";
import icons3 from "../../assets/images/icons/quick.png";

const About = () => {
  const [key, setKey] = useState("english"); // Default tab changed to English
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    // Fetch about page content from API
    const fetchAboutData = async () => {
      try {
        const response = await fetch(
          "https://admin.leaftravelsandtour.com/api/about_us/1/"
        );
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

                {/* Tabs for English, Nepali, and About Nepal */}
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
                      <Nav.Link eventKey="english">About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="nepali">नेपाली</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="aboutNepal">About Nepal</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content className="mt-4">
                    {/* English Tab */}
                    <Tab.Pane eventKey="english">
  {aboutData && aboutData.english && (
    <>
      <h2 className="h2 pt-4 pb-3 fw-bold">
        {aboutData.english[0].main_heading}
      </h2>
      <p className="body-text mb-3">
        {aboutData.english[0].content}
      </p>

      <h3 className="subheading fw-bold mb-3">
        {aboutData.english[0].subheading}
      </h3>

      <ul className="body-text mb-4">
        {aboutData.english[0].subcontent.split("\r\n").map((item, index) => {
          // Check if the item contains a colon (":")
          if (item.includes(":")) {
            const parts = item.split(":");
            return (
              <li key={index} className="mb-2">
                <strong>{parts[0]}:</strong> {parts.slice(1).join(":")}
              </li>
            );
          } else {
            return <li key={index} className="mb-2">{item}</li>;
          }
        })}
      </ul>
    </>
  )}
</Tab.Pane>



                    {/* Nepali Tab */}
                    <Tab.Pane eventKey="nepali">
                      {aboutData && aboutData.nepali && (
                        <>
                          <h2 className="h2 pt-4 pb-3 fw-bold">
                            {aboutData.nepali[0].main_heading}
                          </h2>
                          <p className="body-text mb-3">
                            {aboutData.nepali[0].content}
                          </p>

                          <h3 className="subheading fw-bold mb-3">
                            {aboutData.nepali[0].subheading}
                          </h3>
                          <ul className="body-text mb-4">
                            {aboutData.nepali[0].subcontent
                              .split("\r\n")
                              .map((item, index) => (
                                <li key={index} className="mb-2">
                                  {item}
                                </li>
                              ))}
                          </ul>
                        </>
                      )}
                    </Tab.Pane>

                    {/* About Nepal Tab */}
                    <Tab.Pane eventKey="aboutNepal">
                      {aboutData && aboutData.aboutNepal && (
                        <>
                          <h2 className="h2 pt-4 pb-3 fw-bold">
                            {aboutData.aboutNepal[0].main_heading}
                          </h2>
                          <p className="body-text mb-3">
                            {aboutData.aboutNepal[0].content}
                          </p>

                          <h3 className="subheading fw-bold mb-3">
                            {aboutData.aboutNepal[0].subheading}
                          </h3>
                          <ul className="body-text mb-4">
                            {aboutData.aboutNepal[0].subcontent
                              .split("\r\n")
                              .map((item, index) => (
                                <li key={index} className="mb-2">
                                  {item}
                                </li>
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
                      <img
                        src={icons1}
                        alt="Destination Icon"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">
                    50+ Destinations
                  </Card.Title>
                  <p className="mb-2 body-text">
                    Explore over 50 breathtaking destinations around the world,
                    tailored to suit every traveler’s desire.
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
