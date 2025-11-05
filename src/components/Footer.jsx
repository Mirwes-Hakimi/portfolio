

import React from 'react';
import '../Style/Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <h2 className="footer-subscription-heading">KBL Web Solutions</h2>
        <p className="footer-subscription-text">
          Address: 1978 Contra Costa Blvd, Pleasant Hill, CA 94523
        </p>
        <h3>
          <a className="phone-link" href="tel:+19253348542">
            (925) 334-8542
          </a>
        </h3>
        <p className="footer-description">
          Small or big business, KBL Web Solutions gives assistance to make your website accurately
        </p>
      </section>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="https://www.facebook.com/profile.php?id=61552247004294"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="https://www.linkedin.com/in/mirwes-hakimi-065b651b7/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

