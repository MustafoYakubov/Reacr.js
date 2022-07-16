import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../layout/Navbar/Navbar";
import { useAuth } from "../context/AuthUserContext";
import styles from "../styles/Auth.module.scss";
const Register = () => {
  const ref = useRef(null);
  function handleClick() {
    console.log("on");
  }
  const [email, setEmail] = useState("");
  const [passwordFirst, setPasswordFirst] = useState("");
  const [passwordSecond, setPasswordSecond] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { createUserWithEmailAndPassword } = useAuth();
  console.log(createUserWithEmailAndPassword);
  const onSubmit = (e) => {
    // if (passwordFirst === passwordSecond) {
    //   setError(null);
    //   createUserWithEmailAndPassword(email, passwordFirst);
    //   router.push("/teslaaccount");
    //   // .catch((error) => {
    //   //   setError(error.massage);
    //   // });
    // } else {
    //   setError("Passwords  Don`t match");
    //   e.preventDefault();
    //   setError(error.massage);
    // }
    setError(null);
    if (passwordFirst === passwordSecond) {
      createUserWithEmailAndPassword(email, passwordFirst);
      try {
        e.preventDefault();
        router.push("/teslaaccount");
      } catch (error) {
        setError(error.massage);
      }
    } else setError("Passwords doesn`t match");
    e.preventDefault();
  };
 const isDisable = ["email", "passwordFirst", "passwordSecond "];
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <div className={styles.login}>
        <form className={styles.form} onSubmit={onSubmit}>
          <h2 className={styles.signInText}>Sign Up </h2>
          {error && <h4 className={styles.errorText}>{error}</h4>}

          <label htmlFor="email">Email Address</label>

          <input
            required
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            ref={ref}
          />
          <button onClick={handleClick}>click</button>
          <label htmlFor="passwordFirst">Password</label>
          <input
            type="password"
            className={styles.input}
            value={passwordFirst}
            onChange={(e) => setPasswordFirst(e.target.value)}
            name="passwordFirst"
            required
          />
          <label htmlFor="passwordSecond"> Confirm Password</label>
          <input
            required
            type="password"
            className={styles.input}
            value={passwordSecond}
            onChange={(e) => setPasswordSecond(e.target.value)}
            name="passwordSecond"
          />
          <button
            disabled={isDisable ? true : false}
            className={styles.loginBtn}
            onClick={handleClick}
          >
            Create Account
          </button>
        </form>
        <hr className={styles.line} />
        <div className={styles.signUpArea}>
          <Link
            href={{
              pathname: "/signIn",
            }}
          >
            <button className={styles.createAccount}> Sign In</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
