import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "./fireBase";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});
export default function useFireBaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setloading] = useState(true);
  const router = useRouter();

  //
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
  //
  const clear = () => {
    setAuthUser(null);
    setloading(true);
  };
  //
  const signInWithEmailAndPassword = (email, password) => {
    //Login / /
    firebase.auth().signInWithEmailAndPassword(email, password);
  };
  const createUserWithEmailAndPassword = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const signOut = () => {
    firebase.auth().signOut().then(clear);
    router.push("/");
  };
  useEffect(() => {
    const unSubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unSubscribe();
  }, []);
  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  };
}
