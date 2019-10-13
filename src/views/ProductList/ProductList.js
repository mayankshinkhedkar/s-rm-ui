import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { ProductsToolbar } from './components';
import ProductsTable from './components/ProductsTable/ProductsTable';
import { utilityProj } from 'helpers';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const ProductList = () => {
  const classes = useStyles();

  let getLoggedInUser = utilityProj.getUserSession()

  return (
    <div className={classes.root}>
      {getLoggedInUser.userType === 'admin' && <ProductsToolbar />}
      <div className={classes.content}>
        <ProductsTable isAdmin={getLoggedInUser.userType === 'admin' ? true : false} />
      </div>
    </div>
  );
};

export default ProductList;
