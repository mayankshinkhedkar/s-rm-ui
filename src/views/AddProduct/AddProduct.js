import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Button,
  TextField,
  Typography
} from '@material-ui/core';
import { addProduct } from 'redux/actions/productActions';

const schema = {
  productName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  quantity: {
    presence: { allowEmpty: false, message: 'is required' },
    numericality: {
      onlyInteger: true,
      greaterThan: 0
    },
    length: {
      maximum: 32
    }
  },
  price: {
    presence: { allowEmpty: false, message: 'is required' },
    numericality: {
      onlyInteger: true,
      greaterThan: 0
    },
    length: {
      maximum: 32
    }
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/auth.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    color: theme.palette.white,
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white
  },
  bio: {
    color: theme.palette.white
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  policy: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  },
  AddProductButton: {
    margin: theme.spacing(2, 0)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const AddProduct = props => {
  const { history, products, addtProduct } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleAddProduct = event => {
    event.preventDefault();
    addtProduct({
      id: products.length + 1,
      ...formState.values,
      isProductOfTheDEaey: false
    })
    history.push('/products');
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.content}
          item
          lg={12}
          xs={12}
        >
          <div className={classes.content}>
            <div className={classes.contentBody}>
              <form
                className={classes.form}
                onSubmit={handleAddProduct}
              >
                <Typography
                  className={classes.title}
                  variant="h2"
                >
                  Add new product
                </Typography>
                <Typography
                  color="textSecondary"
                  gutterBottom
                >
                  Add new product into menu according to the need
                </Typography>
                <TextField
                  className={classes.textField}
                  error={hasError('productName')}
                  fullWidth
                  helperText={
                    hasError('productName') ? formState.errors.productName[0] : null
                  }
                  label="Product name"
                  name="productName"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.productName || ''}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError('quantity')}
                  fullWidth
                  helperText={
                    hasError('quantity') ? formState.errors.quantity[0] : null
                  }
                  label="Quantity"
                  name="quantity"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.quantity || ''}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError('price')}
                  fullWidth
                  helperText={
                    hasError('price') ? formState.errors.price[0] : null
                  }
                  label="Price"
                  name="price"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.price || ''}
                  variant="outlined"
                />
                <Button
                  className={classes.AddProductButton}
                  color="primary"
                  disabled={!formState.isValid}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Add Product
                </Button>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

AddProduct.propTypes = {
  history: PropTypes.object
};

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addtProduct: (product) => dispatch(addProduct(product)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddProduct))
