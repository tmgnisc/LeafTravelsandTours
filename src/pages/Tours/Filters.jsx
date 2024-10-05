import React from "react";
import { Accordion, Form } from "react-bootstrap";
import "./tour.css";

const Filters = ({ setInboundFilter, setOutboundFilter }) => {
  const handleInboundChange = (e) => {
    setInboundFilter(e.target.checked);
  };

  const handleOutboundChange = (e) => {
    setOutboundFilter(e.target.checked);
  };

  return (
    <>
      <div className="side_bar">
        <div className="filter_box shadow-sm rounded-2">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Tour Type</Accordion.Header>
              <Accordion.Body>
                <Form.Check
                  type="checkbox"
                  id="inbound"
                  label="Inbound Tour"
                  onChange={handleInboundChange}
                />
                <Form.Check
                  type="checkbox"
                  id="outbound"
                  label="Outbound Tour"
                  onChange={handleOutboundChange}
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Filters;
