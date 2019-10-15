import React, { useState } from 'react';
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

  const [searchProductVal, setSearchProductVal] = useState('');

  const searchProduct = (val) => {
    setSearchProductVal(val)
  }

  let getLoggedInUser = utilityProj.getUserSession()

  return (
    <div className={classes.root}>
      {getLoggedInUser.userType === 'admin' && <ProductsToolbar searchProduct={searchProduct} />}
      <div className={classes.content}>
        <ProductsTable
          isAdmin={getLoggedInUser.userType === 'admin' ? true : false}
          searchProductVal={searchProductVal}
        />
      </div>
    </div>
  );
};

export default ProductList;
