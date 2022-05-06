import React from "react";
import "./footer.scss";
const Footer = () => {
  const scroll = () => {
    window.scrollTo(0, 0);
  };
  const functionsScroll = {
    scrollToHome() {
      window.scrollTo(0, 0);
    },
    scrollToAbout() {
      window.scrollTo(0, 1000);
    },
  };

  return (
    <footer className="footer container-fluid">
      <div className="row">
        <div className="col-2">
          <h3 className="title_footer">Mustafo Yakubov.</h3>
          <h5 className="parag_footer">Creative front-end devoloper</h5>
        </div>
        <div className="col-3 offset-1">
          <h5 className="title_links">Useful Links</h5>
          <h6 onClick={functionsScroll.scrollToHome} className="links">
            Home
          </h6>
          <h6 onClick={functionsScroll.scrollToAbout} className="links">
            About
          </h6>
          <h6 className="links"> Skills</h6>
          <h6 className="links">Portfolio</h6>
        </div>
        <div className="col-3">
          <h5 className="title_links">Social Media</h5>
          <h6 className="links">
            <a href="https://www.instagram.com/">Instagram</a>
          </h6>
          <h6 className="links">
            <a href="">Linkedin</a>
          </h6>
          <h6 className="links">
            <a href=""> Git Hub</a>
          </h6>
          <h6 className="links">
            <a href=""> Telegram</a>
          </h6>
        </div>
        <div className="col-2">
          <input type="email" placeholder="eamil" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
