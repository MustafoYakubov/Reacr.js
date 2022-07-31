import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/UserSlice";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import Form from "./Form";
const Login = () => {
  const dispatch = useDispatch();
  const handleSignIn = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };
  return (
    <>
      <Form title="Sign In" handleClick={handleSignIn} />
    </>
  );
};

export default Login;
