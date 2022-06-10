import React from "react";
import Heading from "./Heading";

const ContactInfo = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, zipcode, city } = address || {};
  if (!contact) {
    return <Heading tag="h1" text="Empty Contact" />;
  }
  return (
    <>
      <Heading tag="h1" text={name} />
      <div>
        <strong>
          Email:
          {email}
        </strong>
      </div>
      <div>
        <strong>
          Address:
          {`${street},${suite},${city},${zipcode}`}
        </strong>
      </div>
    </>
  );
};

export default ContactInfo;
