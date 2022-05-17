import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../components/Heading";

const Error = () => {
  
  useEffect(()=> {

  },[])
  return (
    <div>
      Error 404
      <h1 style={{ marginBottom: "200px" }}>Something is going wrong </h1>
      <Heading text={"This page of error "} />

    </div>
  );
};

export default Error;
