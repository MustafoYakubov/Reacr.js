import Head from "next/head";
import Header from "../components/Header/Header";
import ModelS from "../components/ModelS/ModelS";
import ModelX from "../components/ModelX/ModelX";
import ModelY from "../components/ModelY/ModelY";
import SolarRoof from "../components/SolarRoof/SolarRoof";
import SolarPanel from "../components/SolarPanel/SolarPanel";
import Navbar from "../layout/Navbar/Navbar";
import Accessories from "../components/Accessories/Accessories";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tesla</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Navbar />
      <Header />
      <ModelY />
      <ModelS />
      <ModelX />
      <SolarRoof />
      <SolarPanel />
      <Accessories />
    </>
  );
}
