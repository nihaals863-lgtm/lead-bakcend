import React from "react";
import {Link} from "react-router-dom"
const ShopBanner = () => {
  return (
    <div className="shop-banner container p-4 mb-5">
      <div className="shop-banner__container">
        <div className="shop-banner__item shop-banner__item--reverse">
          <div className="shop-banner__content shop-banner__content--left ">
            <h2 className="shop-banner__title fs-2" style={{ color: "black" }}>
              Rituals 🔱🕉️
            </h2>
            <p className="shop-banner__description fs-5">
              Invoke Blessings from the Most Sacred Temples: Offer Pooja, Enjoy
              Live Darshan, and Receive Pure Holy Prasad at Your Home
            </p>
            <Link to="/pooja-darshan" className="shop-banner__button mt-3">Get Started </Link>
           
          </div>
          <img
            src="https://c9admin.cottage9.com/uploads/5663/kamakhya-temple-history.jpg"
            alt="Men's Clothing"
            className="shop-banner__image mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
