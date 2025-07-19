import { blue } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";

// import saleImg from "../assets/videos/salebanner.jpeg";
// import saleImg2 from "../assets/Contact.jpg";

const Category = () => {
  return (
    <div>
        <div>
        <nav className=" navbar-expand-lg bg-body-tertiary " >
      <div className="container-fluid ">
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav" style={{gap:8}}>
            <li className="nav-item">
            <Link to="/"  className="nav-link active" aria-current="page"    style={{ fontSize:"15", color:"blue" }}>Home/</Link>
            </li>
            <li className="nav-item">
            <Link to=""  className="nav-link active" aria-current="page"    style={{ fontSize:15 }}> Category/</Link>
            </li>
            <li className="nav-item">
               <Link to="/indowestern"  className="nav-link active" aria-current="page"  style={{ fontSize:15 }}>IndoWestern</Link>
            </li>
          </ul>
        </div>
      </div>
         </nav>
      </div>

      <div className="container-fluid mt-5 p-3">
        <div className="three text-center" style={{ marginBottom: 30 }}>
          <h1>SPECIAL INDOWESTERN</h1>
        </div>
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-3 col-6">
            <Link to="/product/:1">
              <div className="category-product-card">
                <img
                  src="https://www.snitch.co.in/cdn/shop/files/e1ef2812aa0d92db678c98e824b896d6.jpg?v=1732713178"
                  alt="Product 1"
                  className="img-fluid first-image"
                />
                <img
                  src="https://www.snitch.co.in/cdn/shop/files/b5bcd5f8cf52f0fdf4279700a66f0772.jpg?v=1732713025"
                  alt="Product 1 Hover"
                  className="img-fluid second-image"
                />
              </div>
              <div className="category-product-details text-black">
                <h6>INDOWESTERN wedding collection</h6>
                <p>INR 999</p>
                <a href="#" className="category-add-to-cart">
                  +Add to Cart
                </a>
              </div>
            </Link>
          </div>
          {/* Card 2 */}
          <div className="col-md-3 col-6 ">
            <Link to="/product/:1">
              <div className="category-product-card">
                <img
                  src="https://www.snitch.co.in/cdn/shop/files/632d579dd6fd8306f88782f24e77e32b.jpg?v=1732713354"
                  alt="Product 2"
                  className="img-fluid first-image"
                />
                <img
                  src="https://www.snitch.co.in/cdn/shop/files/8b59f8fda0821420c7c98d8481ea593e.jpg?v=1732713296"
                  alt="Product 2 Hover"
                  className="img-fluid second-image"
                />
              </div>
              <div className="category-product-details text-black">
                <h6>INDOWESTERN outfits for parties</h6>
                <p>INR 1,199</p>
                <a href="#" className="category-add-to-cart">
                  +Add to Cart
                </a>
              </div>
            </Link>
          </div>
          {/* Card 3 */}
          <div className="col-md-3 col-6">
            <Link to="/product/:1">
              <div className="category-product-card">
                <img
                  src="https://www.snitch.co.in/cdn/shop/files/400d2a5a5a605a380c4ef1b6efb62824.jpg?v=1732713244"
                  alt="Product 3"
                  className="img-fluid first-image"
                />
                <img
                  src="https://www.snitch.co.in/cdn/shop/files/1001ea357c74ca3fa869bf48b807616d_250x.jpg?v=1732603846"
                  alt="Product 3 Hover"
                  className="img-fluid second-image"
                />
              </div>
              <div className="category-product-details text-black">
                <h6>INDOWESTERN outfits for men</h6>
                <p>INR 1,099</p>
                <a href="#" className="category-add-to-cart">
                  +Add to Cart
                </a>
              </div>
            </Link>
          </div>
          {/* Card 4 */}
          <div className="col-md-3 col-6">
            <Link to="/product/:1">
              <div className="category-product-card">
                <img
                  src="https://www.snitch.co.in/cdn/shop/files/825ad55b06bb06326eb9b3025fc84db8_250x.jpg?v=1730186021"
                  alt="Product 4"
                  className="img-fluid first-image"
                />
                <img
                  src="https://www.snitch.co.in/cdn/shop/files/0b22d7c3b207d629e5b08ca901ad6cd1_250x.jpg?v=1729521887"
                  alt="Product 4 Hover"
                  className="img-fluid second-image"
                />
              </div>
              <div className="category-product-details text-black">
                <h6>Affordable INDOWESTERN dresses</h6>
                <p>INR 1,599</p>
                <a href="#" className="category-add-to-cart">
                  +Add to Cart
                </a>
              </div>
            </Link>
          </div>
          {/* Card 5 */}
          <div className="col-md-3 col-6">
            <Link to="/product/:1">
              <div className="category-product-card">
              <img
                  src="https://www.snitch.co.in/cdn/shop/files/400d2a5a5a605a380c4ef1b6efb62824.jpg?v=1732713244"
                  alt="Product 3"
                  className="img-fluid first-image"
                />
                <img
                  src="https://www.snitch.co.in/cdn/shop/files/1001ea357c74ca3fa869bf48b807616d_250x.jpg?v=1732603846"
                  alt="Product 3 Hover"
                  className="img-fluid second-image"
                />
              </div>
              <div className="category-product-details text-black">
                <h6>Pastel IndoWestern outfits</h6>
                <p>INR 1,599</p>
                <a href="#" className="category-add-to-cart">
                  +Add to Cart
                </a>
              </div>
            </Link>
          </div>
                    {/* Card 6 */}
                    <div className="col-md-3 col-6">
            <Link to="/product/:1">
              <div className="category-product-card">
                <img
                  src="https://www.snitch.co.in/cdn/shop/files/825ad55b06bb06326eb9b3025fc84db8_250x.jpg?v=1730186021"
                  alt="Product 4"
                  className="img-fluid first-image"
                />
                <img
                  src="https://www.snitch.co.in/cdn/shop/files/0b22d7c3b207d629e5b08ca901ad6cd1_250x.jpg?v=1729521887"
                  alt="Product 4 Hover"
                  className="img-fluid second-image"
                />
              </div>
              <div className="category-product-details text-black">
                <h6>Modern Indian IndoWestern  </h6>
                <p>INR 1,599</p>
                <a href="#" className="category-add-to-cart">
                  +Add to Cart
                </a>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={saleImg2} alt="First slide" />
            erweqrwrwtert
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={saleImg} alt="Second slide" />
            abfsfs
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={saleImg} alt="Third slide" />
            vxvbcvb
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div> */}
    </div>
  );
};

export default Category;
