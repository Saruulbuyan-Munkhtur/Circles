import React from 'react';
import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/home/index';
import FriendsPage from '../../pages/friends/index';
import ProfilePage from '../../pages/profile/index';
import '../../scss/main.scss';



export const Header = () => {
  return(
      // <BrowserRouter>
        <header className="navbar-main">
            <div>
              <h1><NavLink to="/">Circles</NavLink></h1>
            </div>
            <ul className="navbar-list">
              <li><NavLink to="/friends">Friends</NavLink></li>
              <li><NavLink to="/profile">Profile</NavLink></li>
            </ul>
        </header> 
      //   {/* <Switch>
      //     <Route path="/profile">
      //       <ProfilePage />
      //     </Route>
      //     <Route path="/friends">
      //       <FriendsPage />
      //     </Route>
      //     <Route path="/">
      //       <HomePage />
      //     </Route>
      //   </Switch> */}
      // {/* </BrowserRouter> */}
  )
}

export default Header;