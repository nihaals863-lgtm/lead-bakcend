import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import NewsLetter from "../components/NewsLetter";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../components/Loader";
import Category_product from "../components/Category_product";
import ShopBanner from "./ShopBanner";
import Testimonial from "./Testimonial";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
      
            <ShopBanner />
            <Banner />
            <Category_product />
            <Features />
            <Testimonial />
            <NewsLetter />
       
        </>
      )}
    </>
  );
};

export default Home;
