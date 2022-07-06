import { useEffect, useState } from "react";
import firebase from "./fireBase";
const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});
export default function useFireBaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setloading] = useState(true);


}
