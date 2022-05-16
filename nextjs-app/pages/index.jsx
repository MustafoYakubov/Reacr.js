import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import MyApp from "./_app";

const Home = () => {
  return (
    <>
      <h1>hello mustafo </h1>
    </>
  );

  // return (
  //   <div className={styles.container}>
  //     <Head>
  //       <title>Next js</title>
  //       <meta name="description" content="Next app" />
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>
  //     <div className="homeContent">
  //       <Link href="/blog">about</Link>
  //       <Link href="/contact">Contact </Link>
  //     </div>
  //   </div>
  // );
};
export default Home;
