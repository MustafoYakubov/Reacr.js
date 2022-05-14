import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next js</title>
        <meta name="description" content="Next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="homeContent">
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          eaque pariatur ipsa quibusdam quos assumenda dolore nisi laboriosam
          soluta perferendis itaque possimus animi quod porro corporis omnis,
          accusamus eum laborum.
        </p>
      </div>
    </div>
  );
}
