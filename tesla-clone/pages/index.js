import Head from "next/head";
import Header from "../components/Header/Header";
import ModelS from "../components/ModelS/ModelS";
import ModelX from "../components/ModelX/ModelX";
import ModelY from "../components/ModelY/ModelY";
import Navbar from "../layout/Navbar/Navbar";

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
      <Header />
      <ModelY />
      <ModelS />
      <ModelX />
    </>
  );
}
