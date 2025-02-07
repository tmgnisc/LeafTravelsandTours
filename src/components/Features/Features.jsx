import React from "react";
import "../Features/features.css";
import feature1 from "../../assets/images/feature/beach-umbrella.png";
import feature2 from "../../assets/images/feature/deal.png";
import feature3 from "../../assets/images/feature/location.png";
import feature4 from "../../assets/images/feature/medal.png";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Prev Arrow Component
const PrevArrow = ({ onClick }) => {
  return <div className="slick-prev custom-arrow left-arrow" onClick={onClick}>&#10094;</div>;
};

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return <div className="slick-next custom-arrow right-arrow" onClick={onClick}>&#10095;</div>;
};

const Features = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true, // Enables automatic scrolling
    autoplaySpeed: 2000, // Scrolls every 2 seconds
    speed: 1000, // Smooth transition
    slidesToShow: 3, // Shows 3 slides at a time
    slidesToScroll: 1, // Scrolls 1 at a time
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 991, // For tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // For small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
          dots: true,
        },
      },
    ],
  };

  const featureList = [
    {
      id: 0,
      image: feature1,
      title: "Discover the possibilities",
      des: "With nearly half a million attractions, hotels & more, you're sure to find joy.",
    },
    {
      id: 1,
      image: feature2,
      title: "Ticketing",
      des: "We will assist with the best affordable price tickets in the market to our client.",
    },
    {
      id: 2,
      image: feature3,
      title: "Exploring made easy",
      des: "Book last minute, skip lines &amp; get free cancellation for easier exploring.",
    },
    {
      id: 3,
      image: feature4,
      title: "Education Loan from Prabhu Bank",
      des: "For education loan No:9802305615, 9802305614",
    },
  ];

  return (
    <>
      <section className="feature-section">
        <Container>
          <Row>
            <Col md="12" className="text-center mb-4">
              {/* Add "Our Services" Title */}
              <h1 className="section-title">Our Services</h1>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Slider {...settings}>
                {featureList.map((feature, inx) => {
                  return (
                    <Card key={inx}>
                      <Card.Img
                        variant="top"
                        src={feature.image}
                        className="img-fluid"
                        alt={feature.title}
                      />
                      <Card.Title>{feature.title}</Card.Title>
                      <Card.Text>{feature.des}</Card.Text>
                    </Card>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;
