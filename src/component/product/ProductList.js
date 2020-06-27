import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';

const ProductList = ({ productsList }) => {
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={4}
        >
            {productsList.map(product => <ProductCard key={product._id} product={product} />)}

        </Grid>
    );
}

ProductList.prototype = {
    productsList: PropTypes.array.isRequired
}

export default ProductList;