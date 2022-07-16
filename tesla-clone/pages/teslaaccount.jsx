import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useAuth } from "../context/AuthUserContext";
import styles from "../styles/teslaaccount.module.scss";
import { style } from "@mui/system";
const teslaaccount = () => {
  const { loading, authUser, signOut } = useAuth();
  const router = useRouter();
  // useEffect(() => {
  //   if (!authUser && !loading) {
  //     router.push("/signUp");
  //   }
  // }, [authUser, loading]);

  return (
    <>
      {loading ? (
        <p>Loading ... </p>
      ) : (
        <>
          <Head>
            <title>Account</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          {/* <Navbar /> */}
          <div className={styles.logInfo}>
            {authUser && (
              <p>
                You`re logged as {authUser.email}`s <b>email</b>
              </p>
            )}
            <button
              onClick={console.log(() => signOut)}
              className={styles.logOutBtn}
            >
              <ExitToAppIcon className={styles.btnIcon} />
              Sign Out
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default teslaaccount;
