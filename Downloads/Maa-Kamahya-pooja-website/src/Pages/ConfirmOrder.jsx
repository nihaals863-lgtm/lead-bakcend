import React from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../Styling/Cart.css";
import qrCodeImage from "../assets/newimg/1831d3f8-98d0-491e-9cb6-a0d5bc2b8b0a.jpg";  

const ConfirmOrder = () => {
  const { cartItems, shippingInfo } = useSelector((state) => state.cartData);
  const { user } = useSelector((state) => state.userData);
  const navigate = useNavigate();

  if (!shippingInfo) {
    return <p>Loading...</p>;
  }

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const totalPrice = subtotal;

  return (
    <section className="h-100">
      <div className="container py-2">
        {/* <CheckoutSteps activeStep={1} /> */}
        <div className="row d-flex justify-content-center my-5">
          <div className="col-md-8">
            {/* Shipping Address */}
            <div className="card mb-4">
              <div className="card-header py-3 cart-heading-container">
                <h5 className="mb-0 cart-heading">SHIPPING ADDRESS</h5>
              </div>
              <div className="card-body cart-details">
                <p className="cart-product-name">
                  <small>Address: </small>
                  <small>{address}</small>
                </p>
                <p className="cart-product-name">
                  <small>Phone Number: </small>
                  <small>{shippingInfo.phoneNo}</small>
                </p>
              </div>
            </div>
                {/* Cart Items */}
                <div className="card mb-4">
              <div className="card-header py-3 cart-heading-container">
                <h5 className="mb-0 cart-heading">ALL ITEMS</h5>
              </div>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div className="card-body" key={item.productId}>
                    <div className="row">
                      <div className="col-lg-2 col-md-4">
                        <Link to={`/product/${item.productId}`}>
                          <img
                            src={item.images}
                            className="w-100"
                            alt="cart-img"
                          />
                        </Link>
                      </div>
                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0 cart-details">
                        <p className="cart-product-name fw-bold" style={{ color: "black" }}>{item.name}</p>
                      </div>
                      <div className="col-lg-4 col-md-6 cart-details">
                        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                          <strong style={{ marginTop: ".5rem" }}>
                            {item.quantity} X ₹{item.price.toFixed(2)} = ₹
                            {(item.quantity * item.price).toFixed(2)}/-
                          </strong>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4 mid-border" />
                  </div>
                ))
              ) : (
                <div className="empty-cart">
                  <strong>Your Cart is Empty 🤷‍♂️</strong>
                </div>
              )}
            </div>
          </div>
        
          <div className="col-md-4">
            {/* Order Summary */}
            <div className="card mb-4">
              <div className="card-header py-3 cart-heading-container">
                <h5 className="mb-0 summary-heading">ORDER SUMMARY</h5>
              </div>
              <div className="card-body">
                <ul className="list-group pricing-container">
                  <li className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    <strong>Sub Total</strong>
                    <strong>₹{subtotal.toFixed(2)}/-</strong>
                  </li>
                  <li className="d-flex justify-content-between align-items-center px-0">
                    <strong>Shipping Charges</strong>
                    <strong style={{ color: "green" }}>Free</strong>
                  </li>
                  <hr className="my-2 mid-border" />
                  <li className="total-amount-container d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total Amount</strong>
                    </div>
                    <span>
                      <strong>₹{totalPrice.toFixed(2)}/-</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* UPI Payment Section */}
            <div className="card mb-4">
              <div className="card-header py-3 cart-heading-container">
                <h5 className="mb-0 summary-heading">PAY USING UPI</h5>
              </div>
              <div className="card-body text-center">
                <img src={qrCodeImage} alt="UPI QR" className="img-fluid mb-3" style={{ maxWidth: "220px" }} />
                <p className="mb-1">Scan this QR code using any UPI app</p>
                <p className="mb-0"><strong>Amount: ₹{totalPrice.toFixed(2)}/-</strong></p>
                <p className="text-muted small mt-2">UPI ID: sunnykalita62-2@oksbi</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmOrder;
