import "./footer.scss";
// import messageIcon from "../../assets/icons/messageIcon.svg";
import icon_send from "../../assets/icons/telegram.svg";
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
        <div className="col-3 footer_right_row">
          <h5 className="title_links">News Letter</h5>
          <h6 className="input_txt">
            Enter your email and get notified about news, of.
          </h6>

          <div className="col-12">
            <input
              className="footer_input"
              type="email"
              placeholder="Your email address"
            />
            <button type="submit" className="input_submit">
              <img className="icon_send" src={icon_send} alt="icon_send" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
