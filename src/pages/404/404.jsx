// src/pages/NotFound.jsx
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container } from "react-bootstrap";
import "./404.css"; // You can create a separate CSS file for styles

const NotFound = () => {
  return (
    <>
      <Breadcrumbs
        title="404 Not Found"
        pagename="Page Not Found"
        childnamed="d-none"
        additionalText="Oops! The page you are looking for doesn't exist."
      />
      <section className="not-found">
        <Container>
          <div className="text-center mt-5">
            <h1 className="display-1">404</h1>
            <h2>Tour Not Found</h2>
            <p>We're sorry, the package will be coming soon.</p>
            <p>
              You can go back to the <a href="/">home page</a> or check the links above.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default NotFound;
