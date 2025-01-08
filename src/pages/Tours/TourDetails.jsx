import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Card,
  ListGroup,
  Accordion,
} from "react-bootstrap";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "./tour.css";

function TourDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tour, setTour] = useState(null);

  useEffect(() => {
    const fetchTourDetails = async () => {
      try {
        const response = await fetch(
          `https://admin.leaftravelsandtour.com/api/tourdetails/by-title/${id}/`
        );
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setTour(data[0]);
        } else if (data) {
          setTour(data);
        } else {
          navigate("/404");
        }
      } catch (error) {
        console.error("Error fetching tour details:", error);
        navigate("/404");
      }
    };

    fetchTourDetails();
  }, [id, navigate]);

  if (!tour) {
    return <div>Loading...</div>;
  }

  // Transform images for ImageGallery
  const images = tour.images.map((img) => ({
    original: img,
    thumbnail: img,
  }));

  return (
    <>
      <Breadcrumbs
        title={`Tour ${tour.tour?.title || "Details"}`}
        pagename="Tours"
        childpagename="Tour Details"
        additionalText="Kindly contact us for Customized Package"
      />

      <section className="tour_details py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="fs-2 font-bold mb-4">{tour.tour?.title}</h1>
              <ImageGallery
                items={images}
                showNav={false}
                showBullets={false}
                showPlayButton={false}
              />
            </Col>
          </Row>

          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className="py-5">
              <Col md={8}>
                <Col sm={12}>
                  <Nav variant="pills" className="flex-row nav_bars rounded-2">
                    <Nav.Item>
                      <Nav.Link eventKey="1">Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2">Itinerary</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3">Inclusions & Exclusions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="4">Location</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>

                <Tab.Content className="mt-4">
                  <Tab.Pane eventKey="1">
                    <div className="tour_details">
                      <h1 className="font-bold mb-2 h3 border-bottom pb-2">
                        Overview
                      </h1>
                      <p className="text">{tour.description}</p>

                      <h5 className="font-bold mb-2 h5 mt-3">Tour Highlights</h5>
                      <ListGroup>
                        {tour.highlights.map((highlight, index) => (
                          <ListGroup.Item key={index} className="border-0">
                            {highlight}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="2">
                    <div className="tour_plan">
                      <h1 className="font-bold mb-4 h3 border-bottom pb-2">
                        Itinerary
                      </h1>
                      <Accordion>
                        {tour.itinerary.map((item, index) => (
                          <Accordion.Item eventKey={index} key={index}>
                            <Accordion.Header>
                              <h1 className="h6">{item.day}</h1>
                            </Accordion.Header>
                            <Accordion.Body>
                              <p>{item.description}</p>
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="3">
                    <div className="tour_details">
                      <h1 className="font-bold mb-2 h3 border-bottom pb-2">
                        Inclusions & Exclusions
                      </h1>

                      <h5 className="font-bold mb-2 h5 mt-3">Inclusion</h5>
                      <ListGroup>
                        {tour.included.map((item, index) => (
                          <ListGroup.Item
                            key={index}
                            className="border-0 d-flex align-items-center"
                          >
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            {item}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>

                      <h5 className="font-bold mb-2 h5 mt-3">Exclusion</h5>
                      <ListGroup>
                        {tour.exclusion.map((item, index) => (
                          <ListGroup.Item
                            key={index}
                            className="border-0 d-flex align-items-center"
                          >
                            <i className="bi bi-x-circle-fill text-danger me-2"></i>
                            {item}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="4">
                    <div className="tour_details">
                      <h1 className="font-bold mb-2 h3 border-bottom pb-2">
                        Location
                      </h1>
                      <iframe
                        title={`${tour.tour?.title || "Map"}`}
                        src={tour.mapURL}
                        width="100%"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              <Col md="4">
                <aside>
                  {/* Contact Us Section */}
                  <Card className="rounded-3 p-3 shadow-sm mb-4">
                    <Card.Body>
                      <h1 className="card-title mb-3 h4 font-bold">
                        Contact us for pricing
                      </h1>
                      <div className="d-flex align-items-center mb-3">
                        <span className="me-2 h5">4.5</span>
                        <div className="text-warning me-2">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-half"></i>
                        </div>
                        <span className="text-muted">(365 reviews)</span>
                      </div>
                      <button
                        className="btn btn-danger w-100 fw-bold"
                        style={{ fontSize: "1rem" }}
                      >
                        Book Now
                      </button>
                    </Card.Body>
                  </Card>

                  {/* Need Help Section */}
                  <Card className="rounded-3 p-3 shadow-sm">
                    <Card.Body>
                      <h5 className="card-title mb-3 font-bold">Need Help?</h5>
                      <ul className="list-unstyled mb-0">
                        <li className="d-flex align-items-start mb-3">
                          <i className="bi bi-telephone-fill me-3 text-danger"></i>
                          <div>
                            <span>Call us on:</span> <br />
                            <a
                              href="tel:+9779802305614"
                              className="text-decoration-none fw-bold"
                            >
                              +977 9802305614/15/16
                            </a>
                          </div>
                        </li>
                        <li className="d-flex align-items-start mb-3">
                          <i className="bi bi-clock-fill me-3 text-danger"></i>
                          <div>
                            <span>Timing:</span> <br />
                            <span className="fw-bold">10AM to 5PM</span>
                          </div>
                        </li>
                        <li className="d-flex align-items-start mb-3">
                          <i className="bi bi-headphones me-3 text-danger"></i>
                          <span className="fw-bold">Let Us Call You</span>
                        </li>
                        <li className="d-flex align-items-start">
                          <i className="bi bi-geo-alt-fill me-3 text-danger"></i>
                          <div>
                            <span>Visit Us:</span> <br />
                            <span className="fw-bold">Gairidhara, Kathmandu</span>
                          </div>
                        </li>
                      </ul>
                    </Card.Body>
                  </Card>
                </aside>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    </>
  );
}

export default TourDetails;
