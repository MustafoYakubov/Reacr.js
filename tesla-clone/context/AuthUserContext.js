import { createContext, useContext } from "react";
import useFireBaseAuth from "../lib/useFireBaseAuth";

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signInWithEmailAndPassword: async () => {},
  createUserWithEmailAndPassword: async () => {},
  signOut: async () => {},
});

export function AuthUserProvider({ children }) {
  const auth = useFireBaseAuth();
  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}
export const userAuth = () => useContext(authUserContext);
