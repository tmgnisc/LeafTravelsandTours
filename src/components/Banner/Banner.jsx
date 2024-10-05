import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/3.png";
import sliderImg1 from "../../assets/images/slider/1.png";
import "../Banner/banner.css";

const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={sliderImg} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  A PARADISE <span>FOR NATURE LOVERS</span>
                </h5>
                <p className="sub_text">
                  Nestled in the heart of the Himalayas, Nepal is a country of
                  unparalleled beauty and cultural richness.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  BEAUTIFUL PLACE <span>TO VISIT</span>
                </h5>
                <p className="sub_text">
                  Nepalese hospitality is warm and welcoming, ensuring you feel
                  at home in this enchanting land.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
