import React, { useState } from "react";
import "./Login.css";
import logo from "./Assets/log.png";
import { Link , } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
  const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();


        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
              navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();


        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                  navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={logo} alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>
        <p>
          By signing in you agree to all of Shopile's & Prithvi's confitions of
          Use & Sales .Please see our Privacy, Cookies and Intrest-Based Ads
          Notice
        </p>
        <button onClick={register} className="login__registerButton">
          Create Your Shopile Account
        </button>
      </div>
    </div>
  );
};

export default Login;
