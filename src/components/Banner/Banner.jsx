import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "../Banner/banner.css";

const Banner = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const response = await fetch(
          "https://admin.leaftravelsandtour.com/api/sliders/"
        );
        const data = await response.json();
        setSliders(data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
      }
    };

    fetchSliders();
  }, []);

  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          {sliders.length > 0 ? (
            sliders.map((slide) => (
              <Carousel.Item key={slide.id}>
                <img
                  src={slide.image}
                  className="d-block w-100"
                  alt={slide.title}
                />
                <Carousel.Caption>
                  <div className="slider_des">
                    <h5 className="heading">{slide.title}</h5>
                    <p className="sub_text">{slide.description}</p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))
          ) : (
            <p>Loading sliders...</p>
          )}
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
