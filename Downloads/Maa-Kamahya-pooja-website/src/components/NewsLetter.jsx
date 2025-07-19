import React from "react";

const NewsLetter = () => {
  return (
    <>
      {/* Newsletter Start */}
      <div className="container-fluid appointment my-5  wow fadeIn" data-wow-delay="0.1s"
      style={{ background: "#f9f0e7" }}>
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-md-8 offset-md-2 wow fadeIn" data-wow-delay="0.3s">
          <h1 className="display-6  text-center mb-5">  
           Subscribe to Maa kamakhya puja seva WhatsApp  </h1>
          <h5 className=" mb-5 text-center">
          Subscribe to our WhatsApp channel and receive exclusive updates directly on your phone. Get LIVE Pooja, Abhimantrit Divine Products, Weekly Paid Remedies, and even exclusive opportunities to chat with our expert Astrologers for 169/- Only
          </h5>
             <div className="text-center">
                <button className="btn btn-success  py-2"> <i className="fa-brands fa-whatsapp"></i> Join Maa kamakhya puja seva  </button>
                </div>
        </div>
      </div>
    </div>
  </div>
      
    </>
  );
};

export default NewsLetter;
