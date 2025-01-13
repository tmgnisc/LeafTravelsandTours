import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col } from "react-bootstrap";
import "./blogDetails.css";

const BlogDetails = () => {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const API_URL = `https://admin.leaftravelsandtour.com/api/blogs/${id}/`;

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch blog details");
        }
        const data = await response.json();
        setBlog(data); 
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchBlogDetails();
  }, [API_URL]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Breadcrumbs
        title={blog.title}
        pagename="Blog Details"
        childnamed="d-none"
      />
      <section className="blog-details">
        <Container>
          <Row>
            {/* Image and Content Section */}
            <Col md={6} className="mb-4">
              <img
                src={blog.image}
                alt={blog.title}
                className="img-fluid blog-image"
              />
            </Col>
            <Col md={6}>
              <h1>{blog.title}</h1>
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogDetails;
