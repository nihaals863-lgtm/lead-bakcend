import React from "react";

const ReturnRefundPolicy = () => {

  return (
    <div>
      <div className="row  p-4">
        <div className="col-md-10 offset-md-1">
          <h1 style={{ color: "#073f41", textAlign: "center" }}>
            Refund Policy
          </h1>
            <p style={{ fontSize: 20, marginTop: "15px" }}>
            Once the refund is approved, the amount will be credited to your original payment method within 7-10 working days.
          </p>
        
          <h4 className="mt-4"> Cancellations Due to Issues:</h4>
          <ul>
            <li style={{ fontSize: 20, color: "black" }}>
              In the event of a booking failure due to technical or system
              errors, we may consider refunding the full or partial amount. 
            </li>
          </ul>
          <h4 className="mt-4">Refund Process</h4>
          <ul>
            <li style={{ fontSize: 20, color: "black" }}>
              All refund requests are subject to internal verification and
              approval by our support team.
            </li>
            <li style={{ fontSize: 20, color: "black" }}>
              Approved refunds will be processed within 7–10 working days.
            </li>
          </ul>

          <p style={{ fontSize: 20, color: "black", marginTop: "10px" }}>
            For any refund-related queries, please reach out to our support team
            with your booking ID and payment details.
          
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnRefundPolicy;
