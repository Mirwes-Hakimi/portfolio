import React from 'react';
import '../Style/Footer.css';

import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
    {/* Define the footer section */}
      <section className='footer-subscription'>
        {/* Display address */}
        <p className='footer-subscription-heading'>
        Address:
        </p>
        <p className='footer-subscription-text'>
        1978 Contra Costa Blvd, Pleasant Hill, Ca 94523 </p>

        <li className="window-9-5-nav">
        <h1><a class="phone-link" href="tel:+15109573496"
         style={{ color: 'white', 
         textDecoration: 'none', 
         listStyle: 'none' 
          
           }}> (925) 334-8542</a>
            </h1>
      </li>
        <div className='input-areas'>
          
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
        
          {/* Define footer links */}
        <div className='footer-link-items'>
            <h2>SMALL OR BIG BUSINESS</h2>
           
            <Link to='/'>KBL Web Solutions gives assistance to make your website accurately.</Link>
           
          </div>
          <div className='footer-link-items'>
            <h2>Tax Planning and Projection</h2>
            <Link to='/sign-up'>Are you going to make the planning for tax and the projection of your tax? </Link>
            <Link to='/'>If yes, then you are at the right place.
             Because Bay Tax gives you a superb customer service for Tax Planning and Projection.</Link>
           
          </div>
          <div className='footer-link-items'>
            <h2>Cash Flow Forecasts</h2>
            <Link to='/'>Forecasting of cash flow is major point for every business or individual. </Link>
            <Link to='/'>cash flow works or effects your financial aspects,
             get all the informations by contact us.</Link>
           
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
          
          </div>
          
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
             
            KBL Web Solutions
            </Link>
          </div>
        
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='https://'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
              
            <Link
              className='social-icon-link'
              to='https://www.linkedin.com/in/mirwes-hakimi-065b651b7/'
              target='_blank'
              aria-label='LinkedIn'
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