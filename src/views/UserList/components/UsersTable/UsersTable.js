import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeUser } from 'redux/actions/userActions';

const useStyles = makeStyles(() => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const UsersTable = props => {
  const { className, users, isAdmin, removeUser, searchUserVal } = props;

  const classes = useStyles();

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  let userList = users.filter(obj => obj.userType === 'employee')

  if (searchUserVal.trim().length) {
    userList = userList.filter(obj => {
      let tempWord = `${obj.firstName.toLowerCase()} ${obj.lastName.toLowerCase()}`.trim()

      return tempWord.indexOf(searchUserVal.trim().toLowerCase()) > -1
    });
  }

  return (
    <Card
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  {isAdmin && <TableCell>Delete</TableCell>}
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  userList.length < 1 && <TableRow>
                    <TableCell>No Record Found</TableCell>
                  </TableRow>
                }
                {userList.slice(rowsPerPage * page, rowsPerPage + page).map((user, index) => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={index}
                  >
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Typography variant="body1">{user.firstName}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Typography variant="body1">{user.lastName}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    {
                      isAdmin && <TableCell>
                        <IconButton
                          color="inherit"
                          onClick={() => removeUser(user.email)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    }
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={userList.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[1, 5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

UsersTable.propTypes = {
  className: PropTypes.string
};

function mapStateToProps(state) {
  return {
    users: state.users || []
  }
}
function mapDispatchToProps(dispatch) {
  return {
    removeUser: (user) => dispatch(removeUser(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UsersTable))
