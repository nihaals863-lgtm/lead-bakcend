import React, { useState, useEffect } from "react";
import "../Styling/Productdetails.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../UrlHelper/baseUrl";
import { useDispatch } from "react-redux";
import { AddToCart } from "../Redux/Actions/cartActions";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import {
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaWhatsappSquare,
} from "react-icons/fa";
import moment from "moment";
import Benifits from "./Benifits";
import PujaPackage from "./PujaPackage";
const ProductDetails = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  const [itemDetails, setItemDetails] = useState({});
  const [currentImage, setCurrentImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // const [currentImage, setCurrentImage] = useState(itemDetails.images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleNextImage = () => {
    const currentIndex = itemDetails.images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % itemDetails.images.length;
    setCurrentImage(itemDetails.images[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = itemDetails.images.indexOf(currentImage);
    const prevIndex =
      (currentIndex - 1 + itemDetails.images.length) %
      itemDetails.images.length;
    setCurrentImage(itemDetails.images[prevIndex]);
  };

  // Fetch Product Details
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}/product/${id}`);
        const data = response.data;

        if (data.success) {
          console.log(data.getProduct);
          setItemDetails(data.getProduct);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id, baseUrl]);

  // Set Current Image
  useEffect(() => {
    if (itemDetails?.images?.length) {
      setCurrentImage(itemDetails.images[0]);
    }
  }, [itemDetails]);

  // Countdown Logic
  useEffect(() => {
    if (!itemDetails.date || !itemDetails.time) {
      console.error("Date or time is missing!");
      return;
    }

    const updateTimer = () => {
      const targetDateTime = moment(
        `${itemDetails.date} ${itemDetails.time}`,
        "YYYY-MM-DD HH:mm"
      );
      const now = moment();

      if (targetDateTime.isBefore(now)) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }

      const diff = moment.duration(targetDateTime.diff(now));

      setTimeLeft({
        days: Math.floor(diff.asDays()),
        hours: diff.hours(),
        mins: diff.minutes(),
        secs: diff.seconds(),
      });
    };

    // Initial call
    updateTimer();

    // Update countdown every second
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [itemDetails.date, itemDetails.time]);

  // Loader for missing itemDetails or images
  if (!itemDetails || !itemDetails.images || itemDetails.images.length === 0) {
    return <Loader />;
  }

  const increaseQuantity = () => {
    if (quantity) {
      setQuantity(quantity + 1);
    } else {
      toast.warning("Cannot exceed available stock!");
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const AddToCartHandler = () => {
    dispatch(AddToCart(id, quantity));
    toast.success(`${itemDetails.name} Added to Cart Successfully 🥳`);
  };
  const message = `My Pooja Name: ${itemDetails.name}%0A
  Price: ${itemDetails.price}%0A
  Date: ${itemDetails.date}%0A
  Location: ${itemDetails.location}`;
  
  const phoneNumber = "+919132322798";
  const whatsappShareUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;
  
  console.log(whatsappShareUrl);
 

  return (
    <>
      <div className="container product-detail">
        <div className="row">
          {/* Image Section */}
          <div
            className="col-lg-6 image-section"
            style={{ flexDirection: "column" }}
          >
            {/* Main Image */}
            <div className="main-image">
              <img
                src={currentImage}
                alt="Main Product"
                className="mainImage rounded-4"
                onClick={openModal}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div>
              <div className="thumbnails d-flex mt-3">
                {itemDetails.images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    className="thumbnail mt-1 rounded-4"
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setCurrentImage(src)}
                    style={{
                      border:
                        currentImage === src
                          ? "2px solidrgb(58, 82, 107)"
                          : "none",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>

              {/* Modal */}
              <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="image-modal"
                overlayClassName="image-modal-overlay"
              >
                <div className="modal-content">
                  {/* Close Button */}
                  <button className="close-modal" onClick={closeModal}>
                    <FaTimes />
                  </button>
                  {/* Previous Button */}
                  <button className="prev-image" onClick={handlePrevImage}>
                    <FaArrowLeft />
                  </button>

                  {/* Image */}
                  <img
                    src={currentImage}
                    alt="Current View"
                    className="modal-image"
                  />
                  {/* Next Button */}
                  <button className="next-image" onClick={handleNextImage}>
                    <FaArrowRight />
                  </button>
                </div>
              </Modal>
            </div>
          </div>
          {/* Product Info Section */}
          <div className="col-lg-6 product-info">
            <h3 className="product-title">{itemDetails.name}</h3>
            {/* Date and Location */}
            <p className="mb-2">
                      {itemDetails.description}
                    </p>
            <div className="d-flex align-items-center text-muted mb-2">
              <i className="fa-solid fa-calendar text-danger me-2"></i>
              <h6 className="text-dark">{itemDetails.date}</h6>
            </div>
            <div className="d-flex align-items-center text-muted mb-3">
              <i className="fa-solid fa-location-dot text-danger me-2"></i>
              <h6 className="text-dark">{itemDetails.location}</h6>
            </div>
            {/* Price and Add to Cart */}
            <div className="price-and-rating d-flex">
            <p className="fw-bold mb-3">Price: ₹ {itemDetails.price}</p>
            </div>
            {/* Countdown Timer */}
            <div className="d-flex align-items-center gap-3 mb-1">
              <div className="text-center bg-danger text-white p-1 rounded">
                <h5>
                  {String(timeLeft.days).padStart(2, "0")}{" "}
                  <small className="text-white">Days</small>
                </h5>
              </div>
              <div className="text-center bg-danger text-white p-1 rounded">
                <h5>
                  {String(timeLeft.hours).padStart(2, "0")}{" "}
                  <small className="text-white">Hrs</small>
                </h5>
              </div>
              <div className="text-center bg-danger text-white p-1 rounded">
                <h5>
                  {String(timeLeft.mins).padStart(2, "0")}{" "}
                  <small className="text-white">Mins</small>
                </h5>
              </div>
              <div className="text-center bg-danger text-white p-1 rounded">
                <h5>
                  {String(timeLeft.secs).padStart(2, "0")}{" "}
                  <small className="text-white">Secs</small>
                </h5>
              </div>
            </div>

            <div class="row d-flex align-items-center gap-3 mt-3">
            <div
  className="col-4 col-md-6 text-center"
  style={{ cursor: 'pointer' }}
  data-bs-toggle="modal"
  data-bs-target="#poojaVideoModal"
>
  <video
    src={itemDetails.poojaVideo}
    style={{ width: "40px" }}
    className="img-fluid mb-2"
    width="50"
    muted
  />
  <h6 className="fw-bold">Pooja Video</h6>
</div>

{/* Modal */}
<div
  className="modal fade"
  id="poojaVideoModal"
  tabIndex="-1"
  aria-labelledby="poojaVideoModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="poojaVideoModalLabel">Pooja Video</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body text-center">
        <video
          src={itemDetails.poojaVideo}
          controls
          autoPlay
          style={{ width: '100%', maxHeight: '500px' }}
        />
      </div>
    </div>
  </div>
</div>


<div
  className="col-4 col-md-4 text-center"
  onClick={() => setShowModal(true)}
  style={{ cursor: "pointer" }}
>
  <img
    src={itemDetails.freeParasad}
    style={{ width: "40px" }}
    alt="Free Prasad"
    className="img-fluid mb-2"
    width="50"
  />
  <h6 className="fw-bold">Free Prasad</h6>
</div>


              {/* <div class="col-4 col-md-3 text-center">
                <img
                  src={itemDetails.paidRemedy}
                  style={{ width: "40px" }}
                  alt="Paid Remedy"
                  class="img-fluid mb-2"
                  width="50"
                />
                <h6 class="fw-bold">Paid  Remedy</h6>
              </div> */}
            </div>

            <div class="row mt-3">
              <div class="col-lg-6">
                <button class="btn btn-warning text-white py-2 me-2 w-100">
                  Select Pooja
                </button>
              </div>
              <div class="col-lg-6">
                <a
                  class="btn btn-success me-2 w-100 py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={whatsappShareUrl}
                >
                  {" "}
                  <i className="fa-brands fa-whatsapp"></i> Support
                </a>
              </div>
            </div>

             <button
              className="btn btn-primary wishlist-btn w-100 border-0"
              onClick={AddToCartHandler}
            >
              Add to Cart
            </button> 
          </div>
          {/* Modal for Image Slider */}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Image Modal"
            className="image-modal"
            overlayClassName="image-modal-overlay"
          >
            <div className="modal-content">
              <button className="close-modal" onClick={closeModal}>
                {" "}
                &times;{" "}
              </button>
              <button className="prev-image" onClick={handlePrevImage}>
                {" "}
                &#8249;
              </button>
              <img
                src={currentImage}
                alt="Current View"
                className="modal-image"
              />
              <button className="next-image" onClick={handleNextImage}>
                {" "}
                &#8250;{" "}
              </button>
            </div>
          </Modal>
        </div>
      </div>
      <div className="container border mt-5 p-3 py-4 px-3 mb-4 rounded-4">
        <div className="three" style={{ marginBottom: 20 }}>
          <h4>About Pooja</h4>
        </div>
        <div className="row">
          <p className="ms-2"> {itemDetails.description}</p>
        </div>
      </div>
      {/* Benifits-section */}
      <Benifits />
      {showModal && (
  <div className="modal d-block" tabIndex="-1" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Free Prasad</h5>
          <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
        </div>
        <div className="modal-body text-center">
          <img src={itemDetails.freeParasad} alt="Free Prasad" className="img-fluid" />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default ProductDetails;
