import React, { useEffect, useState } from "react";
import "../PopularPlace/popular-place.css";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../Cards/ProductCard";

const PopularPlace = () => {
  const [popularPlaces, setPopularPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchPopularPlaces = async () => {
      try {
        const response = await fetch("https://admin.leaftravelsandtour.com/api/tour/");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setPopularPlaces(data); // Update the state with API data
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchPopularPlaces();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading spinner or message
  }

  if (error) {
    return <div className="text-danger">Error: {error}</div>; // Display error message
  }

  return (
    <section className="popular">
      <Container>
        <Row>
          <Col md="12">
            <div className="main_heading">
              <h1>Popular Activities</h1>
            </div>
          </Col>
        </Row>
        <Row>
          {popularPlaces.map((place, index) => (
            <Col md={3} sm={6} xs={12} className="mb-5" key={index}>
              {/* Pass the fetched data to ProductCard */}
              <ProductCard val={place} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularPlace;
