import React, { useState, useEffect } from "react";
import { BACKEND_DOMAIN_API } from "../../global/Backend-api";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componenetMouted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`${BACKEND_DOMAIN_API}/api/v1/products`);
      if (componenetMouted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componenetMouted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5  pb-5">
          <button
            className="btn btn-light me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-light me-2"
            onClick={() => filterProduct("Dedicated PC")}
          >
            Dedicated PC
          </button>
          <button
            className="btn btn-light me-2"
            onClick={() => filterProduct("Office PC")}
          >
            Office PC
          </button>
          <button
            className="btn btn-light me-2"
            onClick={() => filterProduct("CPU")}
          >
            CPU
          </button>
          <button
            className="btn btn-light me-2"
            onClick={() => filterProduct("Mainboard")}
          >
            Mainboard
          </button>
          <button
            className="btn btn-light me-2"
            onClick={() => filterProduct("VGA")}
          >
            VGA
          </button>
          <button
            className="btn btn-light me-2"
            onClick={() => filterProduct("RAM")}
          >
            RAM
          </button>
          <button
            className="btn btn-light me-2"
            onClick={() => filterProduct("SSD")}
          >
            SSD
          </button>
          <button
            className="btn btn-light me-2"
            onClick={() => filterProduct("PSU")}
          >
            PSU
          </button>
          <button
            className="btn btn-light me-2"
            onClick={() => filterProduct("Screen")}
          >
            Screen
          </button>
          <button
            className="btn btn-light me-2"
            onClick={() => filterProduct("Mouse Keys")}
          >
            Mouse, Keys
          </button>
          <button
            className="btn btn-light me-2"
            onClick={() => filterProduct("Case")}
          >
            Case
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Lastest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
