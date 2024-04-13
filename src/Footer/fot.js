import React from "react";
import "./yada.css"; // Import the CSS file
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Tour<span>Booking</span>
        </h3>

        <p className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/blog">Blog</a>
        </p>

        <p className="footer-company-name">
          Copyright © 2021 <strong>Tour Booking</strong> All rights reserved
        </p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>BITS</span> Collage
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+251951383935</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:sagar00001.co@gmail.com">EsgaTour@gmail.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          <strong>Afro team </strong> is a team where you can find more creative
          CSS Animations and Effects along with HTML, JavaScript , Reacts and
          Projects using rails.
        </p>
        <div className="footer-links">
          <div>
            <button className="social-button">
              <FaFacebookF size={24} />
            </button>
            <button className="social-button">
              <FaInstagram size={24} />
            </button>
            <button className="social-button">
              <FaLinkedinIn size={24} />
            </button>
            <button className="social-button">
              <FaTwitter size={24} />
            </button>
            <button className="social-button">
              <FaYoutube size={24} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
