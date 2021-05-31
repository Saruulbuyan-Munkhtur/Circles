import React from "react";
import Layout from "../../components/layout/layout";

import "../../scss/main.scss";


const HomePage = () => {
  
  return (
    <Layout>
      <div>
        <section className="homePage-landing">
        </section>
        <section className="homePage-aboutMe">
        </section>
        <section className="homePage-quotes">
        </section>
        <section className="homePage-skills">
        </section>
        <section className="homePage-articles">
          <h1 className="blogList-title">Friends</h1>
        </section>
      </div>
    </Layout>
  )
}

export default HomePage;
export * from './';