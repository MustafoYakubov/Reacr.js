import React, { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../layout/Navbar/Navbar";
import { useAuth } from "../context/AuthUserContext";
import styles from "../styles/Auth.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();
  const onSubmit = (e) => {
    setError(null);
    signInWithEmailAndPassword(email, password)
      .then(authUser => {
        router.push("/");
      })
      .catch((error) => {
        setError(error.massage);
      });
    e.preventDefault();
  };
  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <div className={styles.login}>
        <form className={styles.form} onSubmit={onSubmit}>
          <h2 className={styles.signInText}>Sign In </h2>
          {error && <h4 className={styles.errorText}>{error}</h4>}

          <label htmlFor="email">Email Address</label>

          <input
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />

          <button className={styles.loginBtn}>Login</button>
        </form>
        <hr className={styles.line} />
        <div className={styles.signUpArea}>
          <Link
            href={{
              pathname: "/signUp",
            }}
          >
            <button className={styles.createAccount}> Sign Up</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
