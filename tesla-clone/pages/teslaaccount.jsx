import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { useAuth } from "../context/AuthUserContext";
const teslaaccount = () => {
  const { loading, authUser, signOut } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!authUser && !loading) {
      router.push("/signUp");
    }
  }, [authUser, loading]);

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
          <h1>Tesla Account</h1>
        </>
      )}
    </>
  );
};

export default teslaaccount;
