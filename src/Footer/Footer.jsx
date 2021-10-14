import React from "react";
import "./footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-wrapper">
      <footer>
        <div className="container container-fluid is-inview">
          <div className="row bottom-lg addresses">
            <h3>ACTUAL</h3>
          </div>
          <div className="footer-link-container">
            <a href="#">
              <h4 onClick={scrollToTop}>Scroll To Top</h4>
            </a>
          </div>
          <hr />
          <div className="socials">
            <a href="#" className="btn-primaire animated">
              <div className="social-name">INSTAGRAM</div>
            </a>
            <a href="#" className="btn-primaire animated">
              <div className="social-name">TWITTER</div>
            </a>
            <a href="#" className="btn-primaire animated">
              <div className="social-name">FACEBOOK</div>
            </a>
            <a href="#" className="btn-primaire animated">
              <div className="overflow-hidden">
                <div className="heading-hero">
                  <div className="show-on-load-1st social-name">YOUTUBE</div>
                </div>
              </div>
            </a>
          </div>
          <hr />
          <div className="footer-lastName bottom-lg">
            <h3>DESIGNED AND DEVELOPED BY RUSHIKESH KEMBLE</h3>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
