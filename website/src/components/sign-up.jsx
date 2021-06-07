import React, { useState } from 'react';
import { auth, createUserProfileDocument, getFirebase } from '../utils/firebase';
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

const SignUp = ({ handleClose }) => {
  const firebaseInstance = getFirebase();
  // const displayName = useInput("");
  // const email = useInput("");
  // const password = useInput("");
  // const confirmPassword = useInput("");

  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignUp = async (event) => {
    event.preventDefault();
    
    try {
      if (firebaseInstance) {
        const user = await auth.createUserWithEmailAndPassword(email, password)
        console.log("user", user)
        alert(`Welcome ${firstName}!`);
        await createUserProfileDocument(user, { firstName });
        handleClose();
      }
    } catch (error) {
      console.log("error", error);
      alert(error.message);
    }
  };


  return (
    <div className='sign-up'>
      <h2 className='title'>Sign Up</h2>
      <span>Sign up with your email and password</span>
      <form className={classes.root} onSubmit={handleSignUp}>
        <TextField
          label="First Name"
          variant="filled"
          required
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          variant="filled"
          required
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
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
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;