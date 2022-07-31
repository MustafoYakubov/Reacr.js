import React, { useState } from "react";

const Error = (err) => {
  const [error, setError] = useState("hello");
//   setError(err);
  console.log(error);
  return (
    <>
      <h1>{error}</h1>
    </>
  );
};

export default Error;
