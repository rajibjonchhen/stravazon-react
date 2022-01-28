import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Col sm={2} md={3} lg={4}>
      <Link to={`/detailProduct/${product._id}`}>
        <div className="card-body">
          <h5 className="card-title bg-warning p-1 text-center text-white">
            Product Detail
          </h5>
              <img src={product.imageUrl}/>
          <p> Product : {product.name}</p>
          <p> Brand : {product.brand}</p>
          <p> Price : {product.price}</p>
          <p> Info : {product.description}</p>
        </div>
      </Link>
    </Col>
  );
};

export default ProductCard;
