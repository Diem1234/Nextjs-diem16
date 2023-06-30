import Image from 'next/image';
import React from 'react';

function Footer(props) {
  return (
    <>
      <footer>
        <div className="footer">
          <ul>
            <li>INFERNO</li>
            <li>
              <select>
                <option value="english">English</option>
                <option value="chinese">Chinese</option>
                <option value="deutsch">Deutsch</option>
                <option value="hindi">Hindi</option>
                <option value="portuguese">Portuguese</option>
                <option value="spanish">Spanish</option>
              </select>
            </li>
            <li>
              <select>
                <option value="Dollar">USD: US-Dollar</option>
              </select>
            </li>
          </ul>
          <ul>
            <li className="title">OTHER LINKS</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms &amp; Conditions</li>
            <li>Tickets</li>
            <li>Customer Service</li>
            <li>Our App</li>
          </ul>
          <ul>
            <li className="title">SHORTCUT</li>
            <li>Electronics</li>
            <li>Men &amp; Women</li>
            <li>House Hold</li>
            <li>Sport &amp; Fitness</li>
            <li>Books</li>
            <li>Kids Corner</li>
          </ul>
          <ul>
            <li className="title">LET HELP YOU</li>
            <li>Covid-19</li>
            <li>Your Account</li>
            <li>Shipping Rates</li>
            <li>Replacement</li>
            <li>Help</li>
            <li>
              <a href="#"><i className="fa fa-facebook" /></a>
              <a href="#"><i className="fa fa-instagram" /></a>
              <a href="#"><i className="fa fa-twitter" /></a>
              <a href="#"><i className="fa fa-youtube" /></a>
            </li>
          </ul>
        </div>
        <div className="sub-footer">
          <em>INFERNO</em> Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh
        </div>
      </footer>



    </>
  );
}

export default Footer;
