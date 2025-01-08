// src/pages/BlogDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container } from "react-bootstrap";
import "./blogDetails.css"; // Create CSS file for custom styles

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null); // State to hold blog details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const API_URL = `https://admin.leaftravelsandtour.com/api/blogs/${id}/`;

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch blog details");
        }
        const data = await response.json();
        setBlog(data); // Update state with fetched blog details
      } catch (err) {
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchBlogDetails();
  }, [API_URL]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading spinner or message
  }

  if (error) {
    return <div>Error: {error}</div>; // Show an error message if something goes wrong
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
          <h1>{blog.title}</h1>
          <img src={blog.image} alt={blog.title} className="img-fluid mb-4" />
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </Container>
      </section>
    </>
  );
};

export default BlogDetails;
