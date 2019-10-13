import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { ProductsToolbar } from './components';
import ProductsTable from './components/ProductsTable/ProductsTable';

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

  return (
    <div className={classes.root}>
      <ProductsToolbar />
      <div className={classes.content}>
        <ProductsTable />
      </div>
    </div>
  );
};

export default ProductList;
