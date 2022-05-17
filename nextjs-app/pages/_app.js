import Layout from "../components/Layout";
import "../styles/globals.scss";
import Head from "next/head";
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&family=Lato:ital,wght@1,100&family=Work+Sans:ital,wght@1,200;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
