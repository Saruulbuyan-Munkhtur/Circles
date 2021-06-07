import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Dialog } from '@material-ui/core'

import SignUp from '../sign-up';
import SignIn from '../sign-in';
import { signOut } from '../../utils/signOut';
import '../../scss/main.scss';
import { UserContext } from '../../providers/userProvider';

export const Header = () => {
  const user = useContext(UserContext);
  
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const handleOpenSignUp = () => {
    setSignUp(true);
  }
  const handleOpenSignIn = () => {
    setSignIn(true);
  }
  const handleCloseSignUp = () => {
    setSignUp(false);
  }
  const handleCloseSignIn = () => {
    setSignIn(false);
  }
  if(!user){

    return(
      <header className="navbar-main">
        <ul className="navbar-list">
          <li><NavLink to="/" className="navbar-link">Home</NavLink></li>
          <li><Button type="button" className="navbar-link login" onClick={handleOpenSignUp}>Sign Up</Button></li>
          <li><Button type="button" className="navbar-link login" onClick={handleOpenSignIn}>Login</Button></li>
        </ul>
        <Dialog
          open={signUp}
          onClose={handleCloseSignUp}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className="modal"
        >
          <SignUp handleClose={handleCloseSignUp}/>
        </Dialog>
        <Dialog
          open={signIn}
          onClose={handleCloseSignIn}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className="modal"
        >
          <SignIn handleClose={handleCloseSignIn}/>
        </Dialog>
      </header>
    )
  } else {
    return(
      <header className="navbar-main">
        <ul className="navbar-list">
          <li><NavLink to="/" className="navbar-link">Home</NavLink></li>
          <li><NavLink to="/friends" className="navbar-link">Friends</NavLink></li>
          <li><NavLink to="/profile" className="navbar-link">Profile</NavLink></li>
          <li><Button type="button" className="navbar-link logout" onClick={signOut}>Log Out</Button></li>
        </ul>
      </header>
    )
  }
}

export default Header;