import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import AdvanceSearch from "../../components/AdvanceSearch/AdvanceSearch";
import Features from "../../components/Features/Features";
import Partners from "../../components/Partners/partners";
import { Container, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "../../components/Modal/modal";
import "../Home/home.css";
import PopularPlace from "../../components/PopularPlace/PopularPlace";
import Gallery from "../../components/Gallery/Gallery";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ctaTitle, setCtaTitle] = useState(
    "READY FOR UNFORGETTABLE TRAVEL. REMEMBER US!"
  );
  const [ctaImage, setCtaImage] = useState(""); // State for dynamic background image
  const [destinations, setDestinations] = useState([]); // State for dynamic destinations

  useEffect(() => {
    // Fetch the CTA title and background image from the API
    const fetchCtaData = async () => {
      try {
        const response = await fetch(
          "https://admin.leaftravelsandtour.com/api/slogans/"
        );
        const data = await response.json();

        if (data.length > 0) {
          setCtaTitle(data[0].title);
          setCtaImage(data[0].image); // Set dynamic image from API
        }
      } catch (error) {
        console.error("Error fetching CTA data:", error);
      }
    };

    fetchCtaData();
  }, []);

  useEffect(() => {
    // Fetch destinations from the API
    const fetchDestinations = async () => {
      try {
        const response = await fetch(
          "https://admin.leaftravelsandtour.com/api/top_destination_list/"
        );
        const data = await response.json();
        setDestinations(data); // Update state with API data
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchDestinations();
  }, []);

  useEffect(() => {
    // Open modal on mount and close after 5 seconds
    setIsModalOpen(true);
    const timer = setTimeout(() => {
      setIsModalOpen(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  return (
    <>
      <Banner />
      <AdvanceSearch />
      <section className="partners-section">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Banking Partner with Prabhu Bank</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Partners />

      <Features />

      {/* Dynamic Background Image Section */}
      <section
        className="call_us"
        style={{
          background: `url(${ctaImage}) no-repeat center center/cover`,
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md="8">
              <h2 className="heading">{ctaTitle}</h2>
            </Col>
            <Col md="4" className="text-center mt-3 mt-md-0">
              <a href="tel:9802305614" className="secondary_btn bounce" rel="no">
                Contact Us!
              </a>
            </Col>
          </Row>
        </Container>
        <div className="overlay"></div>
      </section>

      {/* Dynamic "Top Destination" Section */}
      <section className="tours_section slick_slider">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Top Destination For Your Next Vacation</h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Slider {...settings}>
                {destinations.map((destination, inx) => (
                  <div className="img-box" key={inx}>
                    <Card>
                      <Card.Img
                        variant="top"
                        src={destination.image}
                        className="img-fluid"
                        alt={destination.title}
                      />
                      <Card.Title>{destination.title}</Card.Title>
                    </Card>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      <PopularPlace />

      <section className="gallery">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Photo Gallery</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Gallery />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
