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
  const isDisable = ["email", "password"];
  const { signInWithEmailAndPassword, loading } = useAuth();
  const onSubmit = (e) => {
    try {
      signInWithEmailAndPassword(email, password);
      e.preventDefault();
      router.push("/teslaaccount");
    } catch (error) {
      setError(error.message);
    }
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
          {!error && <h4 className={styles.errorText}>{error}</h4>}

          <label htmlFor="email">Email Address</label>

          <input
            required
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />

          <button
            disabled={isDisable ? false : true}
            className={styles.loginBtn}
          >
            Login
          </button>
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
