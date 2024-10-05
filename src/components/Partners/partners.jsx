import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./partners.css";

// Import partner logos
import partner1 from "../../assets/images/feature/prabhu.png";

const Partners = () => {
  const partner = {
    id: 0,
    logo: partner1,
    description: "We assist to grant student loan. For further assistance, kindly mail us on educationloan@leaftravelsandtour.com",
  };

  return (
    <section className="partners-section">
      <Container>
        <Row className="align-items-center">
          <Col md="4" className="text-center">
            <Card className="partner-card">
              <Card.Img
                variant="top"
                src={partner.logo}
                className="img-fluid"
                alt={`Partner logo ${partner.id}`}
              />
            </Card>
          </Col>
          <Col md="8">
            <p className="partner-description">{partner.description}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Partners;
