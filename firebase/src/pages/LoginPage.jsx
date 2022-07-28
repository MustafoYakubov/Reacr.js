import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import Register from "./Register";
import { setUser } from "store/slices/UserSlice";
import LinksPush from "components/LinksPush";
const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };
  return (
    <div>
      <Register name="Sign Up" title="Sign In" handleLogin={handleLogin} />
{/* 
      <LinksPush
        onClick={handleLogin}
        title="or"
        desc="Sign Up"
        link="/login"
      /> */}
      <button onClick={handleLogin}>click</button>
    </div>
  );
};

export default LoginPage;
