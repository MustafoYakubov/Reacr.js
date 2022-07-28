import LinksPush from "components/LinksPush";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Register = ({ name = "Sign Up", title, handleLogin, children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleRegister = async (email, password) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };
  return (
    <div>
      {children}
      <h1>{name}</h1>

      <input
        className="inputEmail"
        type="email"
        placeholder="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="inputPasword"
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Sign up</button>
      {/* <LinksPush title="or" desc="Sign Up" link="/register" /> */}
    </div>
  );
};

export default Register;
