import Block from "../block/Block";
import "./entering.scss";
import emblem from "../../assets/icons/emblem.svg";
import complete from "../../assets/icons/complete.svg";
import clients from "../../assets/icons/clients.svg";
const Entering = () => {
  const blockOne = {
    emblem,
    numbers: "0+",
    paragph: "Years of Experience",
  };
  const blockTwo = {
    complete,
    numbers: "5+",
    paragph: "Completed Projects",
  };
  const blockThree = {
    clients,
    numbers: "1+",
    paragph: "Happy Clients",
  };

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
        <div className="row mt-5">
          <div className="col-xl-4 col-6">
            <Block
              img={blockOne.emblem}
              numbers={blockOne.numbers}
              paragph={blockOne.paragph}
            />
          </div>
          <div className="col-xl-4 col-6">
            <Block
              img={blockTwo.complete}
              numbers={blockTwo.numbers}
              paragph={blockTwo.paragph}
            />
          </div>
          <div className="col-xl-4 col-6 block_3 ">
            <Block
              img={blockThree.clients}
              numbers={blockThree.numbers}
              paragph={blockThree.paragph}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Entering;
