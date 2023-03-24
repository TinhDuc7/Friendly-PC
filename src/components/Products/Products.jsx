import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_DOMAIN_API } from "../../global/Backend-api";
import { Container } from "react-bootstrap";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componenetMouted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      // const response = await axios.get(`${BACKEND_DOMAIN_API}/api/v1/products`);
      const response = await fetch(`${BACKEND_DOMAIN_API}/api/v1/products`);
      console.log(response);
      if (componenetMouted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
        console.log(response);
      }
      return () => {
        componenetMouted = false;
      };
    };

    return () => {
      getProducts();
    };
  }, []);

  return (
    <div>
      <Container></Container>
    </div>
  );
};

export default Products;
