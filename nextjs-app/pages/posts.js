import Heading from "../components/Heading";
import Head from "next/head";
const posts = () => {
  return (
    <div>
      <Head>
        <title>Post</title>
      </Head>
      <h1>This page is posts </h1>
      <Heading tag={"h1"} text={"Post List : "} />
    </div>
  );
};

export default posts;
