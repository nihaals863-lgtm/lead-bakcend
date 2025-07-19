import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import './Testimonial.css'

const testimonials = [
  {
    name: "Maa Kamakhya Temple",
    text: "Maa Kamakhya gave me the divine opportunity to perform a puja at Maa Kamakhya Temple from the comfort of my home. The process was seamless and spiritually fulfilling. I could feel Maa's blessings in every update they shared.",
    img: "https://i.ibb.co/0Mxd4mX/user5.jpg",
    user: "Sneha Roy"
  },
  {
    name: "Maa Kamakhya Temple",
    text: "Puja at Maa Kamakhya Temple through this platform brought me peace and clarity. I was kept informed every step of the way. The rituals were performed with devotion and care. A truly divine experience!",
    img: "https://i.ibb.co/8Nz5G4v/user6.jpg",
    user: "Manish Verma"
  },
  {
    name: "Maa Kamakhya Temple",
    text: "The blessings of Maa Kamakhya reached me through this beautiful online service. Despite being miles away, I felt spiritually connected. The Maa Kamakhya team ensured everything was perfect. Jai Maa Kamakhya!",
    img: "https://i.ibb.co/SVQpGWD/user7.jpg",
    user: "Kavita Nair"
  },
  {
    name: "Maa Kamakhya Temple",
    text: "This online puja was nothing short of miraculous. I opted for the Maa Kamakhya Temple puja for inner strength and peace. The team sent real-time photos and videos. I’m grateful to have found this platform.",
    img: "https://i.ibb.co/hFvLC1y/user8.jpg",
    user: "Arvind Thakur"
  },
  {
    name: "Maa Kamakhya Temple",
    text: "I booked the Maa Kamakhya puja during a tough phase in life. After the puja, things started to shift positively. The team handled everything with spiritual integrity. Maa’s divine presence was felt deeply.",
    img: "https://i.ibb.co/XCsQ0mf/user9.jpg",
    user: "Neelam Joshi"
  }
  
  
];

const Testimonial = () => {
  return (
    <section className="testimonial-web-section" id="testimonials">
      <div className="testimonial-web-container">
        <h2 className="testimonial-web-title">Our customers tell it better than we do!</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-web-wrapper">
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="testimonial-web-items">
              {/* <div className="testimonial-web-img">
                <img src={testimonial.img} alt={testimonial.name} />
              </div> */}
              <div className="testimonial-web-stars">★★★★★</div>
              <h3 className="testimonial-web-title fs-6">{testimonial.name}</h3>
              <p className="testimonial-web-text">{testimonial.text}</p>
              <h3 className="testimonial-web-title fs-6">{testimonial.user}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;