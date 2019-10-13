import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import { utilityProj } from 'helpers';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [userState, setUserState] = useState({
    name: "",
    userType: "",
    avatar: '/images/avatars/avatar_11.png',
  });

  useEffect(() => {
    const getLoggedInUser = utilityProj.getUserSession()

    setUserState(userState => ({
      ...userState,
      name: `${(`${getLoggedInUser.firstName} ${getLoggedInUser.lastName}`).toUpperCase()}`,
      userType: (getLoggedInUser.userType).toUpperCase()
    }));
  }, []);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={userState.avatar}
        to="/"
      />
      <Typography
        className={classes.name}
        variant="h4"
      >
        {userState.name}
      </Typography>
      <Typography variant="body2">{userState.userType}</Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
