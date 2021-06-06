
import React, { useState } from 'react';
import { getFirebase, auth, signInWithGoogle } from '../firebase/firebase';
import { Button, TextField, makeStyles } from '@material-ui/core';
import '../scss/main.scss';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const SignIn = ({ handleClose }) => {
  const firebaseInstance = getFirebase();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async (event) => {
      event.preventDefault();

      try {
        if (firebaseInstance) {
          const user = await auth.signInWithEmailAndPassword(email, password);
          console.log("user", user);
          alert("Welcome back!");
        }
      } catch (error) {
        console.log("error", error);
      }
  };
  return (
    <div className='sign-up'>
      <h2>Sign In</h2>
      <span>Sign in with your email and password</span>
      <form className={classes.root} onSubmit={handleSignIn}>
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Sign In
          </Button>
          <Button onClick={signInWithGoogle} color="secondary">
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;