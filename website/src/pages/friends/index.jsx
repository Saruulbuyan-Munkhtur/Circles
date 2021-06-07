import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import Table from "../../components/table";

import "../../scss/main.scss";


const FriendsPage = () => {
  const [user, setUser] = useState();
  const [friendsList, setFriendsList] = useState();
  const [table, setTable] = useState();
  return (
    <Layout>
      <div>
        <section className="homePage-quotes">
          <h1 className="blogList-title">Users</h1>
            <Table/>
          <div className="blogList-body">
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default FriendsPage;
export * from './index';