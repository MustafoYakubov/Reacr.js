import Image from "next/image";
import Head from "next/head";
import React, { useRef } from "react";
import fone from "../public/format.jpg";
const Home = () => {
  const lazyRoot = React.useRef(null);

  return (
    <>
      <Head>
        <title>Next js</title>
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Lato:ital,wght@1,100&family=Work+Sans:ital,wght@1,200&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <div ref={lazyRoot} /*style={{ overflowX: "scroll", width: "500px" }} */>
        <Image
          src={fone}
          // width={900}
          // height={450}
          // lazyRoot={lazyRoot}
          layout="responsive"
          alt="row_image"
          placeholder="blur"
        />
        <h1 className="text-3xl font-bold underline hover:bg-slate-800">Hello world!</h1>
      </div>
    </>
  );
};
export default Home;
