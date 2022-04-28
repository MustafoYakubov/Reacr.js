import React from "react";
import "./aboutMe.scss";
import imgAboutMe from "../../assets/img/aboutMe.png";
const AboutMe = () => {
  return (
    <section className="aboutMe">
      <div className="row">
        <div className="col-xl-6 col-sm-12">
          <img src={imgAboutMe} alt="imgAboutMe" />
        </div>
        <div className="col-xl-6 col-sm-12">
          <h6 className="whoAmI">WHO I AM</h6>
          <h1 className="aboutMe_txt">About Me</h1>
          <p className="about_paragrph">
            Hi! I`m Mustafo Yakubov, and I`m developer who has passion for
            building clean web applications with intuitive functionality. I
            enjoy the process of turning ideas into reality using creative
            solutions. I`m always curious about learning new skills, tools, and
            concepts. In addition to working on various solo full stack
            projects, I have worked with creative teams, which involves daily
            stand-ups and communications, source control, and project
            management.
          </p>
          <button className="btn-yellow">
            {" "}
            <p>Hire me</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
