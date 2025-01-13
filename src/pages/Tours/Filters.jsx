import React from "react";
import { Accordion, Form } from "react-bootstrap";
import "./tour.css";

const Filters = ({ setInboundFilter, setOutboundFilter, inboundFilter, outboundFilter }) => {
  const handleInboundChange = () => {
    setInboundFilter(true); // Set Inbound to true
    setOutboundFilter(false); // Automatically uncheck Outbound
  };

  const handleOutboundChange = () => {
    setOutboundFilter(true); // Set Outbound to true
    setInboundFilter(false); // Automatically uncheck Inbound
  };

  return (
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
                checked={inboundFilter} // Controlled by state
                onChange={handleInboundChange}
              />
              <Form.Check
                type="checkbox"
                id="outbound"
                label="Outbound Tour"
                checked={outboundFilter} // Controlled by state
                onChange={handleOutboundChange}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Filters;
