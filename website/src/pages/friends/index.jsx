import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/layout";
import Table from "../../components/table";
import User from "../../components/user";
import { firestore } from '../../utils/firebase';

import "../../scss/main.scss";

const FriendsPage = () => {
  const [userList, setUserList] = useState([]);
  const [table, setTable] = useState([]);
  useEffect(() => {
    const fetchUsers= async () => {
      try {
        if (!firestore) return;
        const ref = firestore.collection("users");
        const docs = await ref.get();
        let allUsers= [];
        docs.forEach((doc) => {
          const data = doc.data();
          allUsers.push(data);
        });
        setUserList(allUsers);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchUsers();
  })
  const addToTable = (user) => {
    setTable(table => [...table, user])
  }
  const removeFromTable = (user) => {
    setTable(table => table.filter(user2 => user2.uid !== user.uid));
  }
  const submitBill = (total, table) => {
    

    firestore.collection('tables').add({'total': total})
  }
  return (
    <Layout>
      <div className="friends">
        <section className="friends-table">
          <h1 className="friends-title">Users</h1>
            <Table table={table} submitBill={submitBill} removeFromTable={removeFromTable}/>
          <div className="friends-users">
            {userList.map((user, idx) => {
              return(
                <User
                  user={user}
                  addToTable={addToTable}
                  removeFromTable={removeFromTable}
                  added={false}
                  key={idx}
                />
              )
            })}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default FriendsPage;
export * from './index';