import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  }
}));

const ProductsToolbar = props => {
  const { className, history } = props;

  const classes = useStyles();

  const addProduct = () => {
    history.push('/add-product')
  }

  return (
    <div
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button
          color="primary"
          variant="contained"
          onClick={addProduct}
        >
          Add product
        </Button>
      </div>
    </div>
  );
};

ProductsToolbar.propTypes = {
  className: PropTypes.string
};

export default withRouter(ProductsToolbar);
