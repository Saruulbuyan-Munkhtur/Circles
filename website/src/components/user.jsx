import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import '../scss/main.scss';

const User = ({ displayName, addToTable }) => {

  return (
    <div>
      <h1>{displayName}...</h1>
      <Button color="primary" size="small">Add Friend</Button>
      <Button variant="contained" color="default" size="small" onClick={addToTable}>Add to table</Button>
    </div>
  )
}

export default User;