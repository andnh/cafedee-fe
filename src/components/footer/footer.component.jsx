import React from "react";
import './footer.style.scss'

const Footer = () => {
  return (
    <footer className="page-footer">
      <hr className="clearfix" />
      <div className="container-fluid text-center text-md-left px-0">
        <div className="row">
          <div>
            <div className="footer-title">Cafédee</div>
            <div className="logo-container">
              <span href=""><i className="fab fa-facebook-f"></i></span>
              <span href=""><i className="fab fa-linkedin px-1"></i></span>
              <span href=""><i className="fab fa-twitter"></i></span>
              <span href=""><i className="fab fa-youtube px-1"></i></span>
              <span href=""><i className="fab fa-instagram"></i></span>
            </div>
          </div>
          <div className="footer-right">
            <div className="link-container">
              <span className="content-link" href="">Trang chủ</span>
              <span className="content-link px-2" href="">Về chúng mình</span>
              <span className="content-link content-link-outer-right" href="">Liên hệ</span>
            </div>
            <div className="footer-copyright"><i className="far fa-copyright"></i>Copyright 2019 Cafédee</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
