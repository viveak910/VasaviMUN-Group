import React from "react";
import "./footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Committees</a>
              </li>
              <li>
                <a href="#">Club Activities</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="#">9999999999</a>
              </li>
              <li>
                <a href="#">9999999999</a>
              </li>
              <li>
                <a href="#">vcemun2k23@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="footer-col map">
            <h4>Find Us</h4>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487275.20583027496!2d78.02104972246673!3d17.41958220599469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb942a2497f349%3A0x5c30ca8d2ffb8734!2sVasavi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1723397446067!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                href="https://www.google.com/maps/place/Vasavi+College+of+Engineering/@17.3805532,78.3801333,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb942a2497f349:0x5c30ca8d2ffb8734!8m2!3d17.3805532!4d78.3827082!16s%2Fm%2F02vn5l9?entry=ttu"
                target="_blank"
                className="map-overlay"
                aria-label="Google Maps Link"
              ></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
