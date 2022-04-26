import "./block.scss";
import emblem from "../../assets/icons/emblem.svg";
import iconRight from "../../assets/icons/rightIcon.svg";
const Block = () => {
  return (
    <div className="block">
      <img className="complete_icon" src={emblem} alt="emblem" />
      <div className="block_text">
        <h1 style={{ color: "orange" }}> 5+</h1>
        <h5> years of Exprience</h5>
      </div>
      <img src={iconRight} alt="iconRight" />
    </div>
  );
};

export default Block;
