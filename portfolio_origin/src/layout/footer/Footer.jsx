import "./footer.scss";
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
        <div className="col-xl-2 col-sm-12">
          <h3 className="title_footer">Mustafo Yakubov.</h3>
          <h5 className="parag_footer">Creative front-end devoloper</h5>
        </div>
        <div className="col-xl-3 col-sm-12 table_2  ">
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
        <div className="col-xl-3 col-sm-12">
          <h5 className="title_links">Social Media</h5>
          <h6 className="links">
            <a target="_blank" href="https://www.instagram.com/m_yakuboff">
              Instagram
            </a>
          </h6>
          <h6 className="links">
            <a
              target="_blank"
              href=" https://www.linkedin.com/in/mustafo-yakubov-484338234"
            >
              Linkedin
            </a>
          </h6>
          <h6 className="links">
            <a target="_blank" href="https://github.com/DushanovShamshod/">
              Git Hub
            </a>
          </h6>
          <h6 className="links">
            <a target="_blank" href="https://t.me/m_yakuboff">
              Telegram
            </a>
          </h6>
        </div>
        <div className="col-xl-2 col-sm-12 footer_write_row">
          <h5 className="title_links">News Letter</h5>
          <h6 className="input_txt">
            Enter your email and get notified about news, of.
          </h6>

          <div className="col-12">
            <form>
              <input
                className="footer_input"
                type="email"
                placeholder="Your email address"
              />
            </form>
            {/* <button type="submit" className="input_submit"> */}
            {/* <img className="icon_send" src={icon_send} alt="icon_send" /> */}
            {/* </button> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
