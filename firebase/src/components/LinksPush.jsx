import { Link } from "react-router-dom";
const LinksPush = ({ desc, link, title }) => {
  return (
    <p>
      {title} <Link to={`${link}`}>{desc}</Link>
    </p>
  );
};

export default LinksPush;
