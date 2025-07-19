// import React from 'react'

// const Shippingpolicy = () => {
//   return (
//     <div>
//       <>
//   <meta charSet="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Shipping Policy</title>
//   <link
//     href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
//     rel="stylesheet"
//     integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
//     crossOrigin="anonymous"
//   />
//   <div className="row mt-5 p-4">
//     <div className="col-md-10 offset-md-1">
//       <h1 style={{ color: "#073f41", textAlign: "center" }}>Shipping Policy</h1>
//       <p className="mt-5" style={{ fontSize: 20 }}>
//         We are committed to delivering your purchases quickly and efficiently.
//         Below is our shipping policy, outlining delivery timelines, charges, and
//         conditions.
//       </p>
//       <h4 className="mt-4">Processing Time</h4>
//       <ul>
//         <li style={{ fontSize: 20, color: "black" }}>
//           Orders are processed within 1–2 business days.
//         </li>
//         <li style={{ fontSize: 20, color: "black" }}>
//           Orders placed on weekends or holidays will be processed on the next
//           business day.
//         </li>
//       </ul>
//       <h4 className="mt-4">Shipping Charges</h4>
//       <ul>
//         <li style={{ fontSize: 20, color: "black" }}>
//           Free shipping on orders over $50.
//         </li>
//         <li style={{ fontSize: 20, color: "black" }}>
//           Standard shipping rates apply to orders below $50, calculated at
//           checkout.
//         </li>
//       </ul>
//       <h4 className="mt-4">Delivery Timeline</h4>
//       <ul>
//         <li style={{ fontSize: 20, color: "black" }}>
//           Standard shipping: 3–7 business days.
//         </li>
//         <li style={{ fontSize: 20, color: "black" }}>
//           Express shipping: 1–3 business days (additional charges apply).
//         </li>
//       </ul>
//       <h4 className="mt-4">International Shipping</h4>
//       <ul>
//         <li style={{ fontSize: 20, color: "black" }}>
//           Available for select locations; additional fees and customs duties may
//           apply.
//         </li>
//       </ul>
//       <h4 className="mt-4">Lost or Damaged Items</h4>
//       <p style={{ fontSize: 20 }}>
//         If your order is lost or arrives damaged, contact us at{" "}
//         <a href=""> Maa kamakhya puja seva.com</a> with your order details for
//         resolution.
//       </p>
//     </div>
//   </div>
// </>

//     </div>
//   )
// }

// export default Shippingpolicy




import React from "react";

const ShippingPolicy = () => {
  return (
    <div>
      <div className="row  p-4">
        <div className="col-md-10 offset-md-1">
          <h1 style={{ color: "#073f41", textAlign: "center" }}>
            Shipping Policy
          </h1>
          <p style={{ fontSize: 20 }}>
            We are committed to delivering your pooja-related prasad quickly and
            efficiently. Below is our shipping policy outlining delivery
            timelines, service areas, charges, and terms.
          </p>

          <h4 className="mt-4"> Processing Time:</h4>
          <ul>
            <li style={{ fontSize: 20, color: "black" }}>
              Prasad is shipped within 1 business day after pooja completion.
            </li>
          </ul>

          <h4 className="mt-4"> Shipping Charges:</h4>
          <ul>
            <li style={{ fontSize: 20, color: "black" }}>
              Shipping is free for all customers who book pooja sessions.
            </li>
          </ul>

          <h4 className="mt-4"> Delivery Timeline:</h4>
          <ul>
            <li style={{ fontSize: 20, color: "black" }}>
              Prasad is delivered within 5–7 business days after the pooja.
            </li>
          </ul>

          <h4 className="mt-4">Shipping Area:</h4>
          <ul>
            <li style={{ fontSize: 20, color: "black" }}>
              Shipping is available only in eligible regions across India.
            </li>
          </ul>

          <h4 className="mt-4"> Incorrect Address:</h4>
          <ul>
            <li style={{ fontSize: 20, color: "black" }}>
              We are not responsible for delays due to incorrect shipping
              details provided during booking.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
