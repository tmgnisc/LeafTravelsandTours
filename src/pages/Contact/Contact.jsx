import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { useForm, ValidationError } from '@formspree/react';
import "../Contact/contact.css";
import image from "../../assets/images/new/contact-us.png";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const Contact = () => {
  const [state, handleSubmit] = useForm("manwgdpy"); // Replace with your form ID

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact us ";
  }, []);

  return (
    <>
      <Breadcrumbs
        title="Contact us"
        pagename="Contact us"
        childnamed="d-none"
      />
      <section className="contact pt-5">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="mb-2 h1 font-bold">
                {" "}
                Let's connect and get to know each other{" "}
              </h1>

              <p className="body-text mt-1">
                Reach out to us and start planning your next unforgettable
                adventure together!
              </p>
            </Col>
          </Row>
          <Row className="py-5">
            <Col lg={4} md={6} className="mb-4 mb-lg-0">
              <Card className="border-0 shadow rounded-3">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2 ">
                    <div className="bg-info bg-opacity-10 text-info rounded-circle mb-2 flex-centered p-3">
                      <i className="bi bi-headset h3"></i>
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">Call us</Card.Title>
                  <p className="mb-2 body-text">
                    Get in touch with us today to begin your travel journey!
                  </p>
                  <div className=" d-block justify-content-between">
                    <a type="button" className="btn btn-light me-2 btn-sm">
                      <i className="bi bi-phone me-1"></i>
                      9802305616
                    </a>
                    <a type="button" className="btn btn-light btn-sm">
                      <i className="bi bi-telephone me-1"></i>
                      9802305615, 9802305614
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4 mb-lg-0">
              <Card className="border-0 shadow  rounded-3">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2 ">
                    <div className="bg-danger bg-opacity-10 text-danger rounded-circle mb-2 flex-centered p-3">
                      <i className="bi bi-envelope h3"></i>
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">Email us</Card.Title>
                  <p className="mb-2 body-text">
                    Reach out via email for personalized travel assistance and inquiries!
                  </p>
                  <div className=" d-block justify-content-between">
                    <a type="button" className="btn btn-light me-2 btn-sm">
                      <i className="bi bi-envelope me-1"></i>
                      <span className="body-text">info@leaftravelsandtour.com</span>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="mb-4 mb-lg-0">
              <Card className="border-0 shadow  rounded-3">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-items-center my-2 ">
                    <div className="bg-warning bg-opacity-10 text-warning rounded-circle mb-2 flex-centered p-3">
                      <i className="bi bi-globe2 h3"></i>
                    </div>
                  </div>
                  <Card.Title className="title fw-bold">Social media</Card.Title>
                  <p className="mb-2 body-text">
                    Follow us on social media
                  </p>

                  <ListGroup horizontal className="border-0 justify-content-center">
                    <ListGroup.Item className="border-0">
                      <i className="bi bi-facebook"></i>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0">
                      <i className="bi bi-instagram"></i>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0">
                      <i className="bi bi-linkedin"></i>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0">
                      <i className="bi bi-twitter"></i>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* Other parts of the contact section remain the same */}
          <Row className="g-4 g-lg-5 align-items-center py-5">
            <Col xl={6} md={6} className="d-none d-md-block">
              <img src={image} alt="contact " className="img-fluid me-3" />
            </Col>
            <Col xl={6} md={6}>
              <Card className="bg-light p-4 card border-0 shadow-sm">
                <div className="form-box">
                  <h1 className="h3 font-bold mb-4">Send us a message</h1>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="floatingName"
                          label="Full Name"
                          className="mb-4"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Full Name"
                            name="name" // Add name attribute
                            required
                          />
                          <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel
                          controlId="floatingEmail"
                          label="Email address"
                          className="mb-4"
                        >
                          <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            name="email"
                            required
                          />
                          <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={12}>
                        <FloatingLabel
                          controlId="floatingPhone"
                          label="Phone Number"
                          className="mb-4"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Phone Number"
                            name="phone" // Add name attribute
                            required
                          />
                          <ValidationError 
                            prefix="Phone" 
                            field="phone"
                            errors={state.errors}
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={12}>
                        <FloatingLabel
                          controlId="floatingMessage"
                          label="Your Message*"
                          className="mb-4"
                        >
                          <Form.Control
                            as="textarea"
                            placeholder="Your Message*"
                            name="message"
                            required
                            style={{ minHeight: "125px" }}
                          />
                          <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <button type="submit" className="primaryBtn" disabled={state.submitting}>
                      Send Message
                    </button>
                    {state.succeeded && <p>Thanks for your message!</p>}
                  </form>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
