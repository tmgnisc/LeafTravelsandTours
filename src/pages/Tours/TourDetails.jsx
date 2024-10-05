import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Card,
  ListGroup,
  Stack,
  Accordion,
} from "react-bootstrap";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { tourDetails } from "../../components/utils/data";
import "./tour.css";

function TourDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tourId = parseInt(id, 10);
  const tour = tourDetails[tourId];
  console.log("Tour Data:", tour);

  useEffect(() => {
    if (!tour) {
      navigate("/404"); // Redirect to the 404 page
    }
  }, [tour, navigate]);

  if (!tour) {
    return null; // Prevent rendering until redirect
  }

  return (
    <>
      <Breadcrumbs
        title={tour.title}
        pagename="Tours"
        childpagename="Tour Details"
        additionalText="Kindly contact us for Customized Package"
      />

      <section className="tour_details py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="fs-2 font-bold mb-4">{tour.title}</h1>

              <ImageGallery
                items={tour.images || []}
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
                      <p className="text">{tour.des}</p>

                      <h5 className="font-bold mb-2 h5 mt-3">Tour Info</h5>
                      <ListGroup>
                        {Array.isArray(tour.tourInfo) &&
                          tour.tourInfo.map((tourInfo, index) => (
                            <ListGroup.Item
                              className="border-0"
                              key={index}
                              dangerouslySetInnerHTML={{ __html: tourInfo }}
                            />
                          ))}
                      </ListGroup>

                      <h5 className="font-bold mb-2 h5 mt-3">
                        Tour Highlights
                      </h5>
                      <ListGroup>
                        {Array.isArray(tour.highlights) &&
                          tour.highlights.map((val, index) => (
                            <ListGroup.Item
                              className="border-0 body-text pb-0"
                              key={index}
                            >
                              {val}
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
                        {Array.isArray(tour.itinerary) &&
                          tour.itinerary.map((packageItem, index) => (
                            <Accordion.Item
                              eventKey={index.toString()}
                              key={index}
                              className="mb-4"
                            >
                              <Accordion.Header>
                                <h1
                                  className="h6"
                                  dangerouslySetInnerHTML={{
                                    __html: packageItem.title,
                                  }}
                                ></h1>
                              </Accordion.Header>
                              <Accordion.Body className="body-text">
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: packageItem.des,
                                  }}
                                ></div>
                                {Array.isArray(packageItem.details) &&
                                  packageItem.details.map((day, dayIndex) => (
                                    <div key={dayIndex}>
                                      <h4
                                        dangerouslySetInnerHTML={{
                                          __html: day.title,
                                        }}
                                      />
                                      <p
                                        dangerouslySetInnerHTML={{
                                          __html: day.des,
                                        }}
                                      />
                                    </div>
                                  ))}
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
                        {Array.isArray(tour.included) &&
                          tour.included.map((val, index) => (
                            <ListGroup.Item
                              className="border-0 d-flex align-items-center"
                              key={index}
                            >
                              <i className="bi bi-check-lg me-2 text-success h4 m-0" />{" "}
                              {val}
                            </ListGroup.Item>
                          ))}
                      </ListGroup>

                      <h5 className="font-bold mb-2 h5 mt-3">Exclusion</h5>
                      <ListGroup>
                        {Array.isArray(tour.exclusion) &&
                          tour.exclusion.map((val, index) => (
                            <ListGroup.Item
                              className="border-0 d-flex align-items-center"
                              key={index}
                            >
                              <i className="bi bi-x-lg me-2 text-danger h5 m-0" />{" "}
                              {val}
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
                        title={`${tour.title} Map`}
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
                  <Card className="rounded-3 p-2 shadow-sm mb-4 price-info">
                    <Card.Body>
                      <Stack direction="horizontal" gap={2}>
                        <h1 className="card-title mb-0 h2 font-bold">
                          Contact us for pricing
                        </h1>
                      </Stack>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <ListGroup horizontal>
                          <ListGroup.Item className="border-0 me-2 fw-bold">
                            4.5
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <i className="bi bi-star-fill me-1" />
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <i className="bi bi-star-fill me-1" />
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <i className="bi bi-star-fill me-1" />
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <i className="bi bi-star-fill me-1" />
                          </ListGroup.Item>
                          <ListGroup.Item className="border-0">
                            <i className="bi bi-star-half" />
                          </ListGroup.Item>
                        </ListGroup>
                        <h5 className="h6">(365 reviews)</h5>
                      </div>
                      <NavLink
                        className="primaryBtn w-100 d-flex justify-content-center fw-bold"
                        to="/tours/booking"
                      >
                        Book Now
                      </NavLink>
                    </Card.Body>
                  </Card>

                  <Card className="card-info p-2 shadow-sm">
                    <Card.Body>
                      <h1 className="font-bold mb-2 h3">Need Help?</h1>
                      <ListGroup>
                        <ListGroup.Item>
                          <i className="bi bi-telephone me-1" /> Call us on:
                          <strong>+977 9802305614/15/16</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <i className="bi bi-alarm me-1" /> Timing:
                          <strong>10AM to 5PM</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <i className="bi bi-headset me-1" />
                          <strong>Let Us Call You</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <i className="bi bi-geo-alt me-1" /> Visit Us:
                          <strong>Gairidhara, Kathmandu</strong>
                        </ListGroup.Item>
                      </ListGroup>
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
