import React, { useState, useEffect } from "react";
import "../Footer/footer.css";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import FaWhatsapp from '../../../assets/images/icons/WhatsApp_icon.png';

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/9802305614", "_blank");
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible); 
    };
  }, []);

  return (
    <>
      <footer className="pt-5">
        <Container>
          <Row>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3">Company </h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/">About Us</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">News</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">Faq</NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3">Explore </h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/"> Faq</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">Tour Listings</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/"> Destination</NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3">Quick Link </h4>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <NavLink to="/"> Home</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/">About Us </NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/"> Contact Us </NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md="3" sm="12" className="location mt-3 mt-md-0 ">
              <h4 className="mt-lg-0 mt-sm-3">Contact Info </h4>
              <div className="d-flex align-items-center">
                <p className="pb-2"> GAIRIDHARA, KATHMANDU-02, NEPAL.</p>
              </div>
              <div className="d-flex align-items-top my-2">
                <i className="bi bi-geo-alt me-3"></i>
                <a target="_blank" href="mailto:info@leaftravelsandtour.com" className="d-block"> info@leaftravelsandtour.com | leaftravelsandtourscs@gmail.com </a>
              </div>
              <div className="d-flex align-items-top ">
                <i className="bi bi-telephone me-3"></i>
                <a target="_blank" href="tel:9876543210" className="d-block">977- 9802305614, 9802305615, 9802305616</a>
              </div>
            </Col>
          </Row>
          <Row className="py-2 bdr mt-3">
            <Col className="col copyright">
              <p className="text-light"> @ 2024. Leaf Travels and Tour | All rights reserved </p>
            </Col>
          </Row>
        </Container>
      </footer>

      <div id="back-top" onClick={scrollTop} className={visible ? "active" : ""}>
        <i className="bi bi-arrow-up"></i>
      </div>

      {visible && (
        <div id="whatsapp" onClick={openWhatsApp} className="whatsapp-icon">
          <img src={FaWhatsapp} alt="WhatsApp" />
        </div>
      )}
    </>
  );
};

export default Footer;
