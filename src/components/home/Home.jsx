import React, { useEffect, useState } from "react";

import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    try {
      let response = await fetch("https://marketplace-m6d5.herokuapp.com/products", {
        method: "GET",
      });
      if (response.ok) {
        let data = await response.json();
        setProducts(data);
        console.log(data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        {products &&
          products.map((product) => 
          <Link key={product._id} to={`/DetailPage/${product._id}`}>
             <MyProductCard  product={product} />
          </Link>
          )}
      </Row>
    </Container>
  );
};

export default Home;
