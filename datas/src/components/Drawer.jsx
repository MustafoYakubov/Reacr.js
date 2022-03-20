import React from "react";

const Drawer = (props) => {
  const { resData } = props;
  const integral = resData.films.results;
  console.log(integral);

  if (integral !== undefined) {
    return integral.map((item, index) => {
      <div key={index} className="row">
        <div className="col">{item.id}</div>
      </div>;
    });
  }
  return <div>yeap</div>;
};

export default Drawer;
