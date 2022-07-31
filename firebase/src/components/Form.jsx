import React, { useState } from "react";

const Form = ({ handleClick, title }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <input
        value={email}
        type="email"
        placeholder="Email"
        onChange={(e) => setemail(e.target.value)}
        required
      />
      <input
        value={password}
        type="password"
        placeholder="Password"
        onChange={(e) => setpassword(e.target.value)}
        required
      />
      <button onClick={() => handleClick(email, password)}>{title}</button>
    </>
  );
};

export default Form;
