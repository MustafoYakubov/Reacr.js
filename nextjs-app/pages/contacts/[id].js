import Heading from "../../components/Heading";
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
const contact = ({ contact }) => {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <Heading text={"This page is Contact"} />
      <ContactInfo contact={contact} />
    </div>
  );
};

export default contact;
