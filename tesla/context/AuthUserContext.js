import { createContext, useContext } from "react";
import useFirebaseAuth from "../lib/useFirebaseAuth";

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signInWithEmailAndPassword: () => {},
  createUserWithEmailAndPassword: () => {},
  signOut: () => {},
});

export default function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

export const UseAuth = () => useContext(authUserContext);
