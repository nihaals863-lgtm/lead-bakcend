
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import logomain from "../assets/1logo.gif"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div class="pg-footer">
      <footer class="footer">
        <ScrollToTop />
        <svg
          class="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            class="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>
        <div class="footer-content">
          <div class="footer-content-column">
            <div class="footer-logo">
              <Link class="footer-logo-link" to="/">
                {/* <img src="https://Maa kamakhya puja seva.com/img/kt.png" alt="" /> */}
                <img src={logomain} alt="" />
              </Link>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-menu">
              <h2 class="footer-menu-name"> All Links</h2>
              <ul id="menu-company" class="footer-menu-list">
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="/">Home</Link>
                </li>
                <li class="menu-item menu-item-type-taxonomy menu-item-object-category">
                  <Link to="/pooja-darshan">Pooja Darshan</Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-menu">
              <h2 class="footer-menu-name"> Quick Links</h2>
              <ul id="menu-quick-links" F class="footer-menu-list">
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="/privacypolicy">Privacy Policy</Link>
                </li>

                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="/TermsConditions">Terms & Conditions</Link>
                </li>
                
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="/Disclaimer">Disclaimer</Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link to="/RefundPolicy">Refund Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-content-column">
           
            <div class="footer-call-to-action">
              <h2 class="footer-call-to-action-title"> Contact Us</h2>
              <p class="footer-call-to-action-link-wrapper">
                {" "}
                <span>Sunny Kalita</span><br />
                <span>Email : sunnykalita18@gmail.com</span><br />
                <a href="tel:+91-86389094798"><span>Contact : 8638909479</span></a> <br />
                <span>Address: City: Guwahati
                  Dist: Kamrup
                  State: Assam
                  Landmark: Kamakhya temple
                  Pin: 781010</span>
              </p>
            </div>
          </div>
   
        </div>
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
              <Link className="footer-copyright-link" to="#" target="_self">
                ©{new Date().getFullYear()} | Maa kamakhya puja seva | All rights
                reserved.
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
