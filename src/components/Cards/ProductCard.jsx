import React from "react";
import { Card, Stack } from "react-bootstrap";
import "../Cards/card.css";

const ProductCard = ({ val, showPrice }) => {
  // Convert category to an array if it's not already
  const categories = Array.isArray(val.category) ? val.category : [val.category];

  // Ensure price is a number
  const price = parseFloat(val.price);
  const afterDiscount = parseFloat(val.afterDiscount);

  return (
    <Card className="rounded-2 shadow-sm popular ">
      <Card.Img
        variant="top"
        src={val.image}
        className="img-fluid"
        alt={"image"}
      />
      <Card.Body>
        <Card.Text>
          {/* <i className="bi bi-geo-alt"></i> */}
          <span className="text">{val.location}</span>
        </Card.Text>
        <Card.Title> {val.title} </Card.Title>
        <p className="reviwe">
          <span>
            <i className="bi bi-star-fill me-1"></i>
          </span>
          <span>{val.rating} </span>
          <span>( {val.reviews} reviews )</span>
        </p>
        {/* Map over categories array */}
        {categories.map((cat, index) => (
          <span key={index} className={cat.replace(/ .*/, "") + " badge"}>
            {cat}
          </span>
        ))}
      </Card.Body>

      <Card.Footer className="py-4">
        {afterDiscount && showPrice ? (
          <p className="text-decoration-line-through">
            {" "}
            Nrs.{price.toFixed(2)}
          </p>
        ) : (
          ""
        )}

        <Stack direction="horizontal" className="justify-content-between mt-3">
          <p>
            {" "}
            <b>
              {showPrice
                ? afterDiscount
                  ? 'Nrs.' + afterDiscount.toFixed(2)
                  : 'Nrs.' + price.toFixed(2)
                : ''}
            </b>
          </p>
          <p>
            <i className="bi bi-clock"></i> {val.days}
          </p>
        </Stack>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
