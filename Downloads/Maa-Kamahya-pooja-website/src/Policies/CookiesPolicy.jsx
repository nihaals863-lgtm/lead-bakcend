// import React from 'react'

// const CookiesPolicy = () => {
//   return (
//     <div>
//       <div className="row mt-5 p-4">
//         <div className="col-md-10 offset-md-1">
//           <h1 style={{ color: "#073f41", textAlign: "center" }}>Cookies Policy</h1>
//           <p className="mt-5" style={{ fontSize: 20 }}>
//             At Mohit-Brothers, we use cookies to improve your shopping experience.
//             This policy explains what cookies are, how we use them, and your rights
//             regarding their use. By browsing our website, you consent to our cookie
//             practices.
//           </p>
//           <h4 className="mt-4">What Are Cookies?</h4>
//           <p style={{ fontSize: 20 }}>
//             Cookies are small files stored on your device to enhance website
//             functionality and personalize your experience. They help us offer seamless
//             navigation, save preferences, and recommend products like blazers,
//             Jodhpuris, and Indo-Westerns tailored to you.
//           </p>
//           <h4 className="mt-4">How We Use Cookies</h4>
//           <p style={{ fontSize: 20 }}>
//             We use different types of cookies to optimize our website and services.
//             These include:
//           </p>
//           <ul>
//             <li style={{ fontSize: 20, color: "black" }}>
//               Essential Cookies: Necessary for smooth browsing, secure shopping, and
//               order processing.
//             </li>
//             <li style={{ fontSize: 20, color: "black" }}>
//               Performance Cookies: Help us understand site usage patterns to improve
//               product pages and loading times.
//             </li>
//             <li style={{ fontSize: 20, color: "black" }}>
//               Functionality Cookies: Save your preferences, such as favorite
//               categories or sizes.
//             </li>
//             <li style={{ fontSize: 20, color: "black" }}>
//               Targeting Cookies: Display personalized ads for blazers, wedding
//               Jodhpuris, or Indo-Western styles based on your interests.
//             </li>
//           </ul>
//           <h4 className="mt-4">Third-Party Cookies</h4>
//           <p style={{ fontSize: 20 }}>
//             We partner with services like Google Analytics and advertising networks to
//             enhance your experience. These third-party cookies may track browsing
//             habits across platforms.
//           </p>
//           <h4 className="mt-4">Managing Cookies</h4>
//           <p style={{ fontSize: 20 }}>
//             You can manage cookies via browser settings or opt out of specific
//             tracking, such as Google Analytics, using their tools. Disabling cookies
//             may limit certain features, like saving items in your cart.
//           </p>
//           <h4 className="mt-4">Updates to This Policy</h4>
//           <p style={{ fontSize: 20 }}>
//             We may periodically update this policy. Changes will be posted here with
//             the updated date.
//           </p>
//           <h4 className="mt-4">Contact Us</h4>
//           <p style={{ fontSize: 20 }}>
//             If you have any questions or concerns about our use of cookies, please
//             feel free to contact us at:
//           </p>
//           <p style={{ fontSize: 20 }}>
//             Email: <a href="">Maa kamakhya puja seva.com</a>
//           </p>
//           <p style={{ fontSize: 20 }}>
//             Website:{" "}
//             <a href="Maa kamakhya puja seva.com/" target="_blank">
//               Maa kamakhya puja seva.com/
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CookiesPolicy



import React from "react";

const CookiesPolicy = () => {
  return (
    <div>
      <div className="row  p-4">
        <div className="col-md-10 offset-md-1">
          <h1 style={{ color: "#073f41", textAlign: "center" }}>
            Cookies Policy
          </h1>
          <p style={{ fontSize: 20 }}>
            Our website uses cookies to improve your browsing experience and to
            analyze website traffic. By using our website, you consent to our
            use of cookies as outlined in this policy. You can control cookie
            settings through your browser at any time.
          </p>

          <h4 className="mt-4">Types of Cookies:</h4>
          <ul>
            <li style={{ fontSize: 20, color: "black" }}>
              Functional cookies – to remember your preferences and settings.
            </li>
            <li style={{ fontSize: 20, color: "black" }}>
              Analytics cookies – to track user interactions and behavior.
            </li>

            <li style={{ fontSize: 20, color: "black" }}>
              Performance cookies – to optimize speed and site performance.
            </li>
          </ul>

          <h4 className="mt-4"> Usage:</h4>
          <ul>
            <li style={{ fontSize: 20, color: "black" }}>
              Enhance overall user experience and personalization.
            </li>
            <li style={{ fontSize: 20, color: "black" }}>
              Analyze page traffic and visitor interactions.
            </li>
            <li style={{ fontSize: 20, color: "black" }}>
              Identify issues and improve website performance.
            </li>
          </ul>

          <h4 className="mt-4"> Managing Cookies</h4>
          <ul>
            <li style={{ fontSize: 20, color: "black" }}>
              You can manage or disable cookies through your browser settings.
            </li>

            <li style={{ fontSize: 20, color: "black" }}>
              Disabling cookies may affect some features or functionality of the
              website.
            </li>
          </ul>

          <p style={{ fontSize: 20, color: "black", marginTop: "10px" }}>
            If you have any questions about our use of cookies, please contact
            our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
