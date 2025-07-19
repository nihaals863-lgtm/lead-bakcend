import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaAngleRight } from "react-icons/fa6";
import { baseUrl } from "../UrlHelper/baseUrl";
import Loader from "./Loader";

import { Swiper, SwiperSlide } from "swiper/react";


import { Navigation, Pagination } from "swiper/modules";

const Category_product = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // Fetch product data
  const fetchJodhpuriSuitProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/products`);
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJodhpuriSuitProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* Our products */}
      <div className="container-fluid mt-5">
        <div className="three text-center" style={{ marginBottom: 30 }}>
          <h1>Book a Live Pooja Session for Instant Blessings</h1>
        </div>

        {/* Swiper Slider */}
        <div style={{ padding: "0 20px", marginBottom: 20 }}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={3.5}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}>
            {/* Map through the products */}
            {products?.map((product) => (
              <SwiperSlide key={product._id}>
                <div
                  className="card border shadow rounded overflow-hidden mb-4"
                  style={{ border: "1px solid red", width: "100%",  height: "100%",  }} >
                  {/* Image Section */}
                  <div className="position-relative" style={{ overflow: "hidden" ,height:"100%"}}>
                    <img src={product.images[0]}  alt={product.name}
                      style={{ width: "100%", height: "290px", objectFit: "cover",}} />
                  </div>

                  {/* Content Section */}
                  <div className="card-body" style={{ padding: "15px" }}>
                    <h5 className="fw-bold">{product.name}</h5>
                    <p className="text-muted mb-2">
                      {product.description.slice(0, 100)}...
                    </p>

                    <div
                      className="d-flex align-items-center text-muted mb-2"
                      style={{ fontSize: "14px" }}>
                      <i className="fa-solid fa-calendar text-danger me-2"></i>
                      <small>{product.date}</small>
                    </div>

                    <div
                      className="d-flex align-items-center text-muted mb-3"
                      style={{ fontSize: "14px" }}>
                      <i className="fa-solid fa-location-dot text-danger me-2"></i>
                      <small>{product.location}</small>
                    </div>

                    <p className="fw-bold mb-3">Price: ₹ {product.price}</p>
                    <div className="row">
                      <div className="col-sm-7">
                        <small>{product.booked || "NA"} have booked</small>
                      </div>
                      <div className="col-sm-5">
                        <Link to={`/product/${product._id}`}>
                          <button
                            className="btn btn-warning w-100 fw-bold"
                            style={{ fontSize: "14px", padding: "8px" }}>
                            Book Pooja
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Categories Button */}
        <div className="view-all-button-container text-center mt-5" style={{ marginTop: "20px" }} >
          <Link to="/pooja-darshan"  className="view-all-btn"
            style={{
              color: "#000",  textDecoration: "none",  fontWeight: "bold",  fontSize: "16px", backgroundColor:"white" }}>
            See All <FaAngleRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Category_product;
