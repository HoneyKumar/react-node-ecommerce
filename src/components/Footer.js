import React from 'react';
import { Link } from 'react-router-dom';
const Footer =()=>{
    return (
        <footer className="footer">
        <div className="container-fluid">
          <nav>
            <ul>
              <li>
                <Link to="/">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about-us">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

        </div>
      </footer>
    );
}

export default Footer;
