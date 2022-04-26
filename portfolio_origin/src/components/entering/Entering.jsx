import Block from "../block/Block";
import "./entering.scss";
const Entering = () => {
  return (
    <>
      <div className="entering">
        <h3 className="title_enter">
          Hi, I`m <span>Mustafo Yakubov</span> 👋
        </h3>
        <h1 className="info_enter">Front-End Developer</h1>
        <p className="about_enter">
          I code beautifully simple things, and I love what I do.
        </p>
        <div className="avatar"></div>
      </div>
      <div className="works">
        <div className="row">
          <div className="col-xl-4">
            <Block />
          </div>
          <div className="col-xl-4">
            <Block />
          </div>
          <div className="col-xl-4">
            <Block />
          </div>
        </div>
      </div>
    </>
  );
};

export default Entering;
