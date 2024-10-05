// src/pages/BlogDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../../components/utils/blogdata";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container } from "react-bootstrap";
import "./blogDetails.css"; // Create CSS file for custom styles

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

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
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </Container>
      </section>
    </>
  );
};

export default BlogDetails;
