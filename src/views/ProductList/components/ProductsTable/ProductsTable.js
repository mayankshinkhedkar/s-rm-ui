import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Checkbox,
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
import { updateProductOfTheDay, removeProduct } from 'redux/actions/productActions';

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
  const { className, products, updateProductOfTheDay, isAdmin, searchProductVal } = props;

  const classes = useStyles();

  const [selectedProduct, setSelectedProduct] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleSelectOne = (event, id) => {
    setSelectedProduct(id);
    updateProductOfTheDay(id);
  };

  let productsList = products

  if (searchProductVal.trim().length) {
    productsList = productsList.filter(obj => {
      let tempWord = obj.productName.toLowerCase().trim()

      return tempWord.indexOf(searchProductVal.trim().toLowerCase()) > -1
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
                  <TableCell>Product of the Day</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  {isAdmin && <TableCell>Delete</TableCell>}
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  productsList.length < 1 && <TableRow>
                    <TableCell>No Record Found</TableCell>
                  </TableRow>
                }
                {productsList.slice(rowsPerPage * page, rowsPerPage + page).map((product, index) => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={index}
                  >
                    <TableCell>
                      <Checkbox
                        checked={selectedProduct === product.id || product.isProductOfTheDEaey}
                        color="primary"
                        onChange={event => handleSelectOne(event, product.id)}
                        value="true"
                        disabled={!isAdmin}
                      />
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Typography variant="body1">{product.productName}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Typography variant="body1">{product.quantity}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>{product.price}</TableCell>
                    {
                      isAdmin && <TableCell>
                        <IconButton
                          color="inherit"
                          onClick={() => removeProduct(product.id)}
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

function mapDispatchToProps(dispatch) {
  return {
    updateProductOfTheDay: (user) => dispatch(updateProductOfTheDay(user)),
    removeProduct: (user) => dispatch(removeProduct(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductsTable))
