import Head from "next/head";
import Navbar from "../layout/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tesla</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Navbar />
    </>
  );
}
