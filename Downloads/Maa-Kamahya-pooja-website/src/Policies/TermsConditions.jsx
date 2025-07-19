// import React from 'react'

// const TermsConditions = () => {
//   return (
//     <div>
//    <div className="row mt-5 p-4">
//   <div className="col-md-10 offset-md-1">
//     <h1 style={{ color: "#073f41", textAlign: "center" }}>
//       Terms &amp; Conditions
//     </h1>
//     <p className="mt-5" style={{ fontSize: 20 }}>
//       Last updated on 11-01-2025 17:02:36
//     </p>
//     <p className="mt-5" style={{ fontSize: 20 }}>
//       These Terms and Conditions, along with privacy policy or other terms
//       (“Valid details have to be given for account creation.”) constitute a
//       binding agreement by and between Maa kamakhya puja seva.com, ( “Sahil bajaj” or
//       “Sanjay bajaj”) and relate to your use of our website, (E-commerce
//       Website: Clothing).
//     </p>
//     <p className="mt-5" style={{ fontSize: 20 }}>
//       By using our website and availing the Services, you agree that you have
//       read and accepted these Terms (including the Privacy Policy). We reserve
//       the right to modify these Terms at any time and without assigning any
//       reason. It is your responsibility to periodically review these Terms to
//       stay informed of updates.
//     </p>
//     <p style={{ fontSize: 20 }}>
//       The use of this website or availing of our Services is subject to the
//       following terms of use:
//     </p>
//     <ul style={{ fontSize: 20 }}>
//       <li>
//         To access and use the Services, you agree to provide true, accurate and
//         complete information to us during and after registration, and you shall
//         be responsible for all acts done through the use of your registered
//         account.
//       </li>
//       <li>
//         Neither we nor any third parties provide any warranty or guarantee as to
//         the accuracy, timeliness, performance, completeness or suitability of
//         the information and materials offered on this website or through the
//         Services, for any specific purpose. You acknowledge that such
//         information and materials may contain inaccuracies or errors and we
//         expressly exclude liability for any such inaccuracies or errors to the
//         fullest extent permitted by law.
//       </li>
//       <li>
//         Your use of our Services and the websiteis solely at your own risk and
//         discretion.. You are required to independently assess and ensure that
//         the Services meet your requirements.
//       </li>
//       <li>
//         The contents of the Website and the Services are proprietary to Us and
//         you will not have any authority to claim any intellectual property
//         rights, title, or interest in its contents.
//       </li>
//       <li>
//         You acknowledge that unauthorized use of the Website or the Services may
//         lead to action against you as per these Terms or applicable laws.
//       </li>
//       <li>
//         You agree to pay us the charges associated with availing the Services.
//       </li>
//       <li>
//         You agree not to use the website and/ or Services for any purpose that
//         is unlawful, illegal or forbidden by these Terms, or Indian or local
//         laws that might apply to you.
//       </li>
//       <li>
//         You agree and acknowledge that website and the Services may contain
//         links to other third party websites. On accessing these links, you will
//         be governed by the terms of use, privacy policy and such other policies
//         of such third party websites.
//       </li>
//       <li>
//         You understand that upon initiating a transaction for availing the
//         Services you are entering into a legally binding and enforceable
//         contract with the us for the Services.
//       </li>
//       <li>
//         You shall be entitled to claim a refund of the payment made by you in
//         case we are not able to provide the Service. The timelines for such
//         return and refund will be according to the specific Service you have
//         availed or within the time period provided in our policies (as
//         applicable). In case you do not raise a refund claim within the
//         stipulated time, than this would make you ineligible for a refund.
//       </li>
//       <li>
//         Notwithstanding anything contained in these Terms, the parties shall not
//         be liable for any failure to perform an obligation under these Terms if
//         performance is prevented or delayed by a force majeure event.
//       </li>
//       <li>
//         These Terms and any dispute or claim relating to it, or its
//         enforceability, shall be governed by and construed in accordance with
//         the laws of India.
//       </li>
//       <li>
//         All disputes arising out of or in connection with these Terms shall be
//         subject to the exclusive jurisdiction of the courts in Moradabad, Uttar
//         Pradesh
//       </li>
//       <li>
//         All concerns or communications relating to these Terms must be
//         communicated to us using the contact information provided on this
//         website.
//       </li>
//     </ul>
//   </div>
// </div>
//     </div>
//   )
// }

// export default TermsConditions








import React from "react";

const TermsAndConditions = () => {
  return (
    <div>
      <div className="row  p-4">
        <div className="col-md-10 offset-md-1">
          <h1 style={{ color: "#073f41", textAlign: "center" }}>
            Terms & Conditions
          </h1>
          <p style={{ fontSize: 20 }}>
            By booking a pooja session through our platform, you agree to the
            terms outlined below. Please read these carefully before making any
            bookings.
          </p>

          <h4 className="mt-4"> Booking Period:</h4>
          <ul>
            <li style={{ fontSize: 20, color: "black" }}>
              Pooja bookings must be made at least 1–2 days in advance of your
              preferred date.
            </li>
          </ul>

          <h4 className="mt-4"> Payment:</h4>
          <ul>
            <li style={{ fontSize: 20, color: "black" }}>
              Full payment is deducted immediately once the booking is
              confirmed.
            </li>
          </ul>

          <h4 className="mt-4"> Cancellations:</h4>
          <ul>
            <li style={{ fontSize: 20, color: "black" }}>
              We reserve the right to modify or cancel any booking under special
              or unforeseen circumstances.
            </li>

            <li style={{ fontSize: 20, color: "black" }}>
              If a booking is cancelled from our end, we will inform you in
              advance and assist accordingly. //{" "}
            </li>
          </ul>

          <h4 className="mt-4"> User Responsibility:</h4>
          <ul>
            <li style={{ fontSize: 20, color: "black" }}>
              Shipping is available only in eligible regions across India.
            </li>
          </ul>

          <h4 className="mt-4"> Incorrect Address:</h4>
          <ul>
            <li style={{ fontSize: 20, color: "black" }}>
              It is your responsibility to enter accurate information during the
              booking process.
            </li>

            <li style={{ fontSize: 20, color: "black" }}>
              We are not liable for delays or issues caused by incorrect details
              provided by the user.
            </li>
          </ul>
          <p style={{ fontSize: 20, color: "black", marginTop: "10px" }}>
            By proceeding with a booking, you acknowledge and accept these
            terms. We encourage users to contact our support team for any
            clarifications before booking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
