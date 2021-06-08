import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import User from './user';

import '../scss/main.scss';

const Table = ({ members, submitBill, removeFromTable }) => {
  const [total, setTotal] = useState(0);
  return (
    <div className="table">
      <h3>Table Members</h3>
      <ul className="table-members">
        {members.map((user) => {
          return(
            <User 
              user={user}
              removeFromTable={removeFromTable}
            />
          )
        })}

      </ul>
      <TextField
          label="Total Payment"
          variant="filled"
          required
          value={total}
          onChange={e => setTotal(e.target.value)}
        />
      <Button variant="contained" color="primary" onClick={submitBill}>Submit</Button>
    </div>
  )

}

export default Table;