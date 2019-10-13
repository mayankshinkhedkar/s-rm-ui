import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
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

const ProductsTable = props => {
  const { className, products } = props;

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
                  <TableCell>Product Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.slice(rowsPerPage * page, rowsPerPage + page).map((user, index) => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={index}
                  >
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Typography variant="body1">{user.productName}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Typography variant="body1">{user.quantity}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{user.price}</TableCell>
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
          count={products.length}
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

ProductsTable.propTypes = {
  className: PropTypes.string
};

function mapStateToProps(state) {
  return {
    products: state.products || []
  }
}

export default connect(
  mapStateToProps
)(withRouter(ProductsTable))
