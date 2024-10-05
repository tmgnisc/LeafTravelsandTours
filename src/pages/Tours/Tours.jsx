import React, { useState, useEffect } from "react";
import { Container, Row, Col, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { popularsData } from "../../components/utils/data";
import ProductCard from "../../components/Cards/ProductCard";
import Filters from "./Filters";

function Tours() {
  const [showFilter, setShowFilter] = useState(false);
  const [inboundFilter, setInboundFilter] = useState(false);
  const [outboundFilter, setOutboundFilter] = useState(false);

  const handleFilter = () => {
    setShowFilter(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "tour";
  }, []);

  const filteredTours = popularsData.filter((tour) => {
    if (inboundFilter && outboundFilter) {
      return true; 
    }
    if (inboundFilter) {
      return tour.location.includes("Nepal") || tour.location.includes("Kathmandu"); 
    }
    if (outboundFilter) {
      return !tour.location.includes("Nepal") && !tour.location.includes("Kathmandu"); 
    }
    return true;
  });

  return (
    <>
     <Breadcrumbs 
  title="Tours" 
  pagename="Tours" 
  childnamed="d-none" 
  additionalText="You can customized package as your choice as well. Kindly contact us for customized pacakge" 
/>

      <section className="tour_list py-5">
        <Container>
          <Row className="g-3">
            <Col xl="3" lg="4" md="12" sm="12">
              <div className="d-lg-none d-block">
                <button onClick={handleFilter} className="primaryBtn">
                  <i className="bi bi-funnel"></i> Filters
                </button>
              </div>

              <div className="filters d-lg-block d-none">
                <Filters
                  setInboundFilter={setInboundFilter}
                  setOutboundFilter={setOutboundFilter}
                />
              </div>
            </Col>
            <Col xl="9" lg="8" md="12" sm="12">
              <Row>
                {filteredTours.map((val, inx) => (
                  <Col
                    xl={4}
                    lg={6}
                    md={4}
                    sm={6}
                    xs={12}
                    className="mb-5"
                    key={inx}
                  >
                    <Link
                      to={`/tour-details/${val.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <ProductCard val={val} />
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <Offcanvas show={showFilter} onHide={() => setShowFilter(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Filters
            setInboundFilter={setInboundFilter}
            setOutboundFilter={setOutboundFilter}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Tours;
