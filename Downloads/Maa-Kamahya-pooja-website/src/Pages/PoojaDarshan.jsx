import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaAngleRight } from "react-icons/fa6";
import { baseUrl } from "../UrlHelper/baseUrl";
import Loader from "../components/Loader";

const PoojaDarshan = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("A-Z");

  // Fetch product data
  const fetchJodhpuriSuitProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/products`);
      setProducts(response.data.products);
      setFilteredProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJodhpuriSuitProducts();
  }, []);

  // Handle filter change
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    let sortedProducts = [...products];

    switch (value) {
      case "A-Z":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Low-High":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "High-Low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredProducts(sortedProducts);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* Header Section */}
      <div className="container-fluid mt-3">
        <div className="three text-center" style={{ marginBottom: 20 }}>
          <h1>Shakti Dham</h1>
        </div>

        {/* Filter Section */}
        <div className="row mb-2 justify-content-end px-5">
          <div className="col-md-3 text-end">
            <select className="form-select" value={filter} onChange={handleFilterChange}>
              <option value="A-Z">Sort by Name (A-Z)</option>
              <option value="Z-A">Sort by Name (Z-A)</option>
              <option value="Low-High">Price Low to High</option>
              <option value="High-Low">Price High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Section */}
        <div className="row g-4 p-5">
          {filteredProducts.map((product) => (
            <div className="col-md-4 mb-2" key={product._id}>
              <div className="card border-0 shadow rounded overflow-hidden"
                style={{ border: "1px solid red" }}>
                {/* Image Section with Hover */}
                <div className="position-relative" style={{ overflow: "hidden" ,height:"100%"}}>
                    <img src={product.images[0]}  alt={product.name}
                      style={{ width: "100%", height: "250px", objectFit: "cover",}} />
                  </div>

                {/* Content Section */}
                <div className="card-body">
                  <h5 className="fw-bold">{product.name}</h5>
                  <p className="text-muted mb-2">
                      {product.description.slice(0, 100)}...
                    </p>
                  <div className="d-flex align-items-center text-muted mb-2">
                    <i className="fa-solid fa-calendar text-danger me-2"></i>
                    <small>{product.date}</small>
                  </div>

                  <div className="d-flex align-items-center text-muted mb-3">
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
                        <button className="btn btn-warning w-100 fw-bold">
                          Book Pooja
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PoojaDarshan;
