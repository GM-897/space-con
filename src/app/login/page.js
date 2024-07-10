'use client'

import React, { useState } from 'react';
import { auth } from '../firbase';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import GoogleButton from 'react-google-button'

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleEmailSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Signed in successfully with email and password');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert('Signed in successfully with Google');
      router.push('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={styles.loginContainer}>
      <h2 style={styles.loginHeading}>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        style={styles.input}
      />
      <button onClick={handleEmailSignIn} style={styles.emailButton}>
        Sign In with Email
      </button>
      <GoogleButton type="dark" onClick={handleGoogleSignIn} style={styles.googleButton} />
    </div>
  );
};

const styles = {
  
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '5px',
  },
  loginHeading: {
    fontSize: '32px', // Increased font size
    marginBottom: '20px', // Adjusted margin to move the heading higher
  },
  input: {
    padding: '10px',
    margin: '5px 0',
    width: '300px',
    color: 'black',
  },
  emailButton: {
    padding: '10px',
    width: '220px',
    marginTop: '10px',
    border: '1px solid white',
    color: 'white',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'color 0.3s, background-color 0.3s',
  },
  googleButton: {
    width: '220px',
    marginTop: '30px',
  },
};

export default Login;
