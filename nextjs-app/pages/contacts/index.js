import Heading from "../../components/Heading";
import Head from "next/head";
const index = () => {
  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>

      <Heading text={"Contacts List :"} />
    </div>
  );
};

export default index;
