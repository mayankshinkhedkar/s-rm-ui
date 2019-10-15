import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from './components';
import { utilityProj } from 'helpers';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = () => {
  const classes = useStyles();

  const [searchUserVal, setSearchUserVal] = useState('');

  const searchUser = (val) => {
    setSearchUserVal(val)
  }

  let getLoggedInUser = utilityProj.getUserSession()

  return (
    <div className={classes.root}>
      <UsersToolbar searchUser={searchUser} />
      <div className={classes.content}>
        <UsersTable
          searchUserVal={searchUserVal}
          isAdmin={getLoggedInUser.userType === 'admin' ? true : false}
        />
      </div>
    </div>
  );
};

export default UserList;
