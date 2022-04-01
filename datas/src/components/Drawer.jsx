import React from "react";

const Drawer = (props) => {
  const { resData } = props;
  const integral = resData.films.results;
  console.log(integral);

  return integral ? (
    integral.map((item, index) => (
      <div key={index} className="row">
        <div className="col">{item.id}</div>
        {/* <div className="col">{item?.primaryImage?.url}</div> */}
        <img src={item.primaryImage?.url} alt="primaryImage" />
      </div>
    ))
  ) : (
    <div>data yoq</div>
  );
};

export default Drawer;
