import React, { useState } from "react";
import "./Footer.css";
import lineIcon from "../assets/ELEMEN/line-icon.png";
import youtubeIcon from "../assets/ELEMEN/youtube-icon.png";
import mailIcon from "../assets/ELEMEN/mail-icon.png";
import instagramIcon from "../assets/ELEMEN/instagram-icon.png";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDeveloperClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleVisitLinkedIn = () => {
    window.open("https://www.linkedin.com/in/tristan-gautama-419916243/", "_blank");
    setShowPopup(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      setShowPopup(false);
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-sections">
          <div className="footer-copyright">
            <p className="footer-copyright-text">
              Copyright © 2025 I'M KOM. All rights reserved.
            </p>
            <p className="footer-developed-text">
              Developed by{" "}
              <span 
                className="developer-name" 
                onClick={handleDeveloperClick}
                title="Click to visit LinkedIn profile"
              >
                Tristan Nathanael Gautama
              </span>
            </p>
          </div>
          <div className="footer-contact">
            <h3 className="footer-contact-title">Contact Us</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <img src={instagramIcon} alt="Instagram Icon" className="footer-contact-icon" />
                <a href="https://instagram.com/imkom_umn" target="_blank" rel="noopener noreferrer">
                  @imkom_umn
                </a>
              </li>
              <li className="footer-contact-item">
                <img src={lineIcon} alt="Line Icon" className="footer-contact-icon" />
                <a href="https://line.me/ti/p/~639kpkydy" target="_blank" rel="noopener noreferrer">
                  @639kpkydy
                </a>
              </li>
              <li className="footer-contact-item">
                <img src={youtubeIcon} alt="YouTube Icon" className="footer-contact-icon" />
                <a href="https://www.youtube.com/@imkomumn3659" target="_blank" rel="noopener noreferrer">
                  I'M KOM UMN
                </a>
              </li>
              <li className="footer-contact-item">
                <img src={mailIcon} alt="Mail Icon" className="footer-contact-icon" />
                <a href="mailto:imkom@umn.ac.id">
                  imkom@umn.ac.id
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {showPopup && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup-content">
            <h2 className="popup-title">Connect with the Developer</h2>
            <p className="popup-description">
              Visit Tristan Nathanael Gautama's LinkedIn profile to learn more about his work and connect professionally.
            </p>
            <div className="popup-buttons">
              <button 
                className="popup-button visit" 
                onClick={handleVisitLinkedIn}
              >
                Visit LinkedIn
              </button>
              <button 
                className="popup-button close" 
                onClick={handleClosePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;