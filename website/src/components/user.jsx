import React, { useState } from 'react';
import { Button, Card, CardContent, Typography } from '@material-ui/core';

import '../scss/main.scss';

const User = ({ user, addToTable, removeFromTable, added }) => {
  const [invited, setInvited] = useState(added);
  const addFunc = () => {
    addToTable(user);
    setInvited(true);
  }
  const removeFunc = () => {
    removeFromTable(user);
    setInvited(false);
  }
  if(!invited){
    return (
      <Card>
        <CardContent>
          <Typography>{user.firstName} {user.lastName}</Typography>
          <Typography>{user.age}</Typography>
          <Typography>{user.gender}</Typography>
        </CardContent>
        <Button variant="contained" color="default" size="small" onClick={addFunc}>Add to table</Button>
      </Card>
    )
  } else{
    return(
      <Card>
        <CardContent>
          <Typography>{user.firstName}...</Typography>
        </CardContent>
          <Button variant="text" color="default" size="small" onClick={removeFunc}>Remove from table</Button>
        </Card>
    )
  }
}

export default User;