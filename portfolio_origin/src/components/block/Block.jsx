import "./block.scss";
import iconRight from "../../assets/icons/rightIcon.svg";
const Block = (props) => {
  const { img, numbers, paragph } = props;
  return (
    <div className="block">
      <img className="complete_icon" src={props.img} alt="emblem" />
      <div className="block_text">
        <h1 style={{ color: "orange" }}> {numbers}</h1>
        <h5> {paragph}</h5>
      </div>
      <img src={iconRight} alt="iconRight" />
    </div>
  );
};

export default Block;
