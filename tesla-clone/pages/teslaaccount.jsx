import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useAuth } from "../context/AuthUserContext";
import styles from "../styles/teslaaccount.module.scss";
import AccountNavbar from "../components/AccountNavbar/AccountNavbar";
// import { style } from "@mui/system";
const teslaaccount = () => {
  const { loading, authUser, signOut } = useAuth();
  const router = useRouter();
  useEffect(() => {

    if (!loading && !authUser) router.push("/signUp");
  }, [authUser, loading]);

  return (
    <>
      {loading ? (
        <p>Loading ... </p>
      ) : (
        <>
          <AccountNavbar />

          <Head>
            <title>Account</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          <div className={styles.logInfo}>
            {authUser && (
              <p style={{ marginTop: "350px", color: "red" }}>
                You`re logged as {authUser.email}
              </p>
            )}
            <button onClick={signOut} className={styles.logOutBtn}>
              sign Out
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default teslaaccount;
