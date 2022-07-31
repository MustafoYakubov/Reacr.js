import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/use-auth";
import { removeUser } from "store/slices/UserSlice";
const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  console.log(isAuth, email);
  return isAuth ? (
    <>
      <div>Welcome</div>
      <button onClick={() => dispatch(removeUser())}>
        Sign Out from {email}
      </button>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default HomePage;
