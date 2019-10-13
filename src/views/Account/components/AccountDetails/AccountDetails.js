import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import { utilityProj } from 'helpers';

const useStyles = makeStyles(() => ({
  root: {}
}));

const AccountDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const getLoggedInUser = utilityProj.getUserSession()

  const [values, setValues] = useState({
    firstName: getLoggedInUser.firstName.toUpperCase(),
    lastName: getLoggedInUser.lastName.toUpperCase(),
    email: getLoggedInUser.email,
    userType: getLoggedInUser.userType,
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                margin="dense"
                name="firstName"
                onChange={handleChange}
                required
                disabled
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                margin="dense"
                name="lastName"
                onChange={handleChange}
                required
                disabled
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                onChange={handleChange}
                required
                disabled
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select User Type"
                margin="dense"
                name="userType"
                onChange={handleChange}
                required
                disabled
                select
                SelectProps={{ native: true }}
                value={values.userType}
                variant="outlined"
                className={classes.textField}
              >
                <option value="" />
                <option value={'admin'}>Admin</option>
                <option value={'employee'}>Employee</option>
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;
