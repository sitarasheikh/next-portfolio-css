import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/16/solid';
import React from 'react';
import './styles/Footer.css';
const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-grid">
        <div className="footer-item">
          <div className="icon-container">
            <MapIcon className="icon" />
          </div>
          <div>
            <h1 className="footer-title">Address</h1>
            <address className="footer-text">
              Lorem ipsum dolor sit
            </address>
          </div>
        </div>
        
        <div className="footer-item">
          <div className="icon-container">
            <DevicePhoneMobileIcon className="icon" />
          </div>
          <div>
            <h1 className="footer-title">Phone</h1>
            <p className="footer-text">
              +921234567 <br />
              +921234568
            </p>
          </div>
        </div>
        
        <div className="footer-item">
          <div className="icon-container">
            <EnvelopeIcon className="icon" />
          </div>
          <div>
            <h1 className="footer-title">Send Us Email</h1>
            <p className="footer-text">
              info@example.com <br />
              support@example.com
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          Webdev warriors 2024 | All Rights Reserved
        </p>
        <div className="footer-links">
          <a href="#terms" className="footer-link">Terms & Condition</a>
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <a href="#sitemap" className="footer-link">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
