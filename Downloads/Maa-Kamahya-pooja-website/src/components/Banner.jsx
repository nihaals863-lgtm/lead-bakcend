import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import { baseUrl } from "../UrlHelper/baseUrl";
import "../Styling/Banner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "../Styling/Hovereffect.css"
import saleImge1 from "../assets/newimg/Red_Photo_India_Greeting_Durga_Puja_Vlog_Youtube_Thumbnail.webp"
import saleImge2 from "../assets/newimg/Yellow_and_Black_Photo_Vaikunta_Ekadashi_Abhishekam_YouTube_Thumbnail_1260_x_680_px_1.webp"


const Banner = () => {
  const { loading } = useSelector((state) => state.allUsers);

  const [images, setImages] = useState([]);
  const navigate = useNavigate()

  // fetch all banners
  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get(`${baseUrl}/banner`);
        console.log(response.data)
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchImages();
  }, []);

  //fetch all products 
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchpro() {
      try {
        const response = await axios.get(`${baseUrl}/products`);
        setProduct(response.data.products);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchpro();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <>
     
        
           <div className="container rounded-4">
         <Slider {...settings} className="slick_box ">
       
          <div className="carousel-item active">
            {/* <img className="d-block w-100 rounded-4" src={saleImge1} alt="Third slide" /> */}
            <img className="d-block w-100 rounded-4" src="https://blog.yatradham.org/wp-content/uploads/2024/06/Kamakhya-Temple-Story-Timings-Things-to-do-Much-More.jpg" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 rounded-4" src="https://www.northeastbullet.com/wp-content/uploads/2024/03/kamakhya.jpg.webp" alt="Third slide" />
            
          </div>
        </Slider>
    
           </div>
     
    </>
  );
};

export default Banner;
