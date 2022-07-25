import { useSelector } from "react-redux";
export function useAuth() {
  const { email, id, token } = useSelector((state) => state.user);
  console.log(email, id);
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
