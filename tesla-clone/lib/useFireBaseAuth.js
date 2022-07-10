import { useEffect, useState } from "react";
import firebase from "./fireBase";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});
export default function useFireBaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setloading] = useState(true);
  const authStateChanged = async (authState) => {
    if (!authState) {
      setloading(false);
      return;
    }
    setloading(true);
    const formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setloading(false);
  };
  const clear = () => {
    setAuthUser(null);
    setloading(true);
  };
  const signInWithEmailAndPassword = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password);
  };
  const createUserWithEmailAndPassword = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password);
  };
  const signOut = () => {
    firebase.auth().signOut().then(clear);
  };
  useEffect(() => {
    const unSubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
  });
  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  };
}
