// src/pages/Blog.jsx
import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./blog.css"; // Create CSS file for custom styles

const Blog = () => {
  const [blogs, setBlogs] = useState([]); // State to hold blog data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for errors

  const API_URL = "https://admin.leaftravelsandtour.com/api/blogs/";

  // Fetch blog data from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const data = await response.json();
        setBlogs(data); // Update blogs state with fetched data
      } catch (err) {
        setError(err.message); // Set error message if fetching fails
      } finally {
        setLoading(false); // Turn off loading spinner
      }
    };

    fetchBlogs();
  }, []);

  // Function to convert YouTube URL to embed URL
  const getEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading spinner or message
  }

  if (error) {
    return <div>Error: {error}</div>; // Show an error message if something goes wrong
  }

  return (
    <>
      <Breadcrumbs
        title="Blog"
        pagename="Blog"
        childnamed="d-none"
        additionalText="Explore our latest articles and travel tips."
      />
      <section className="blog-page">
        <Container>
          <Row>
            {blogs.map((blog) => (
              <Col md={4} key={blog.id} className="mb-4">
                <Card className="blog-card">
                  <Card.Img variant="top" src={blog.image} alt={blog.title} />
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{blog.description}</Card.Text>
                    <NavLink to={`/blog/${blog.id}`} className="btn btn-primary">
                      Read More
                    </NavLink>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* YouTube Videos Section */}
          <h2 className="text-center my-4">Watch Our Videos</h2>
          <div className="youtube-videos">
            {["https://www.youtube.com/watch?v=j61j9X4xCnA", "https://www.youtube.com/watch?v=kBcXzgiDiFs", "https://www.youtube.com/watch?v=zR-IGAia7CY&t=59s"].map(
              (link, index) => (
                <div className="video-container" key={index}>
                  <iframe
                    width="300"
                    height="169"
                    src={getEmbedUrl(link)}
                    title={`YouTube video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blog;
