import React, { useContext } from "react";
import { UserContext } from '../../providers/userProvider.js'
import Layout from "../../components/layout/layout";
import "../../scss/main.scss";

const HomePage = () => {
  const user = useContext(UserContext);
  
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
        </section>
      </div>
    </Layout>
  )
}

export default HomePage;