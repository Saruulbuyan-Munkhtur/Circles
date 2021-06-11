import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import User from './user';

import '../scss/main.scss';

const Table = ({ table, submitBill, removeFromTable }) => {
  const [total, setTotal] = useState(0);
  return (
    <div className="table">
      <h3>Table Members</h3>
      <ul className="table-members">
        {table.map((user, idx) => {
              return(
                <User
                  user={user}
                  removeFromTable={removeFromTable}
                  added={true}
                  key={idx}
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
      <Button variant="contained" color="primary" onClick={(total, table) => submitBill(total, table)}>Submit</Button>
    </div>
  )

}

export default Table;