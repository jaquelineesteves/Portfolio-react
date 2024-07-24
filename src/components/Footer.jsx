import './styles/style.css';
import React from 'react';


const Footer = () => {
  return (
    <footer className="footer sticked-bottom">
      <div className="container d-flex justify-content-center ">
      <a
          href="https://github.com/jaquelineesteves"
          
          className="footer-icon mx-4"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jaqueline-esteves-2359781b9/"
          
          className="footer-icon mx-4"
        >
          <i className="bi bi-linkedin "></i>
        </a>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;