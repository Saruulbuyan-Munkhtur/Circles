import React, { useContext, useState, useEffect } from "react";
import { firestore } from '../../utils/firebase';
import { UserContext } from '../../providers/userProvider.js'
import Layout from "../../components/layout/layout";
import User from "../../components/user";
import Table from "../../components/table";
import "../../scss/main.scss";

const HomePage = () => {
  const user = useContext(UserContext);
  const [list, setList] = useState(null);
  const ref = firestore.collection(`users`);

  useEffect(() => {
    ref.get().then(snapshot => {
      if(!snapshot) {
        setList(l => [])
      } else {
        let users = [];
        snapshot.forEach(user => {
          users.push({ key: user.id, ...user.data })
        })
        setList(l => users);
      }
    }).catch(error => {
      alert(error);
    })
  }, []);
  
  let listToDisplay;
  if (list === null) {
    listToDisplay = (<li>Loading Users...</li>)
  } else if (list.length === 0) {
    listToDisplay = (<li>No user found</li>)
  } else {
    listToDisplay = list.map(user => {
      return (<li key={ user.key }><User displayName={user.displayName}/></li>)
    })
  }
  
  return (
    <Layout>
      <div>
        <section className="homePage-landing">
          <h1>Circles</h1>
          <h3>A platform meant to reduce the friction of socializing</h3>
        </section>
        <section className="homePage-aboutUs">
          <div className="aboutUs-body">
            <div className="aboutUs-title">
              <h1>About Us</h1>
              <h2>Our Mission and Future</h2>
            </div>
            <div className="aboutUs-content">
              <p>Our objective is to be a social network that enables socialization and not the other way around. Making plans with friends to hang out isn't as easy as it can be. Issues such as scheduling and reaching out add friction to meeting up</p>
              <p>By making it clear WHEN and with WHOM you are willing to out with, it allows for more opportunites to socialize for you and for others. Some friends are closer and are in a tighter circle with you. Circles will allow you to manage your social circles effectively.</p>
            </div>

          </div>
        </section>
        <section className="homePage-quotes">
          <h1 className="blogList-title">Users</h1>
            <Table/>
          <div className="blogList-body">
            <ul>{ listToDisplay }</ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomePage;