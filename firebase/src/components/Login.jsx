import React from "react";
import { useDispatch } from "react-redux";
import { setUser } from "store/slices/UserSlice";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import Error from "./Error";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((e) => {
        <Error err={e} />;
      });
  };
  return (
    <>
      <Form title="Sign In" handleClick={handleSignIn} />
      <Error/>
    </>
  );
};

export default Login;
