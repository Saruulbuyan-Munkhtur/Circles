import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import { Select, TextField, MenuItem, InputLabel, Button } from '@material-ui/core';
import { useDocument } from '../../services/firestore';
import firebase from 'firebase/app';

import "../../scss/main.scss";


const ProfilePage = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    age: '',
    billingInformation: '',
    gender: '',
  })
  let useruid = 'CnnFRG9Dw6hPUP4fqBtumvaUMsq1';
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    useruid = user.uid;
    // alert(useruid);
  } else {
    alert("Sign in or Sign up please");
  }
});
  const userData = useDocument(`users/${useruid}`);
  console.log(useruid);

  useEffect(() => {
    if (userData.doc != null) {
      setState((state) => ({ ...state, firstName: userData.doc.firstName}));
      setState((state) => ({ ...state, lastName: userData.doc.lastName}));
      setState((state) => ({ ...state, age: userData.doc.age}));
      setState((state) => ({ ...state, billingInformation: userData.doc.billingInformation}));
      setState((state) => ({ ...state, gender: userData.doc.gender}));
    }
  }, [userData.doc]);

  return (
    <Layout>
      <div className="profilePage">
        <section >
          <form className="profile-information">
            <TextField
              label="First Name"
              variant="filled"
              required
              value={state.firstName}
              onChange={(text) => setState((state) => ({ ...state, firstName: text.target.value}))}
            />
            <TextField
              label="Last Name"
              variant="filled"
              required
              value={state.lastName}
              onChange={(text) => setState((state) => ({ ...state, lastName: text.target.value}))}
            />
            <TextField
              label="Age"
              variant="filled"
              value={state.age}
              onChange={(text) => setState((state) => ({ ...state, age: text.target.value}))}
            />
            <TextField
              label="Billing Information"
              variant="filled"
              value={state.billingInformation}
              onChange={(text) => setState((state) => ({ ...state, billingInformation: text.target.value}))}
            />
            <InputLabel>Gender</InputLabel>
            <Select
              label="Gender"
              value={state.gender}
              onChange={(text) => setState((state) => ({ ...state, gender: text.target.value}))}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                userData.updateRecord({doc: state});
                alert("Your information has been updated")
              }} 
            >
              Submit
            </Button>
          </form>
        </section>      
      </div>
    </Layout>
  )
}

export default ProfilePage;