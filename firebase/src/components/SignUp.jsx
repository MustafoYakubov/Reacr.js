import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/UserSlice";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Form from "./Form";
const SignUp = () => {
  const dispatch = useDispatch();
  const handleSignUp = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log();
      })
      .catch(console.error);
  };
  return ( 
    <>
      <Form title="Sign Up" handleClick={handleSignUp} />
    </>
  );
};

export default SignUp;
