import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import './ProductCard.css';
import FormatNumber from '../../component/common/FormatNumber';

const ProductCard = ({ product }) => {
    return (
        <Grid item >
            <div>
                <div className="container">
                    <div className="card">
                        <div className="card-head">
                            <img src="https://www.walmartchile.cl/views/layout/walmartchile/img/logo-walmartchile.png" alt="logo" className="card-logo" />
                            <img src={`https://${product.image}`} alt="Shoe" className="product-img" />
                        </div>
                        <div className="card-body">
                            <div className="product-desc">
                                <span className="product-title">
                                    {product.brand}
                                </span>
                                <span className="product-caption">
                                    {product.description}
                                </span>
                            </div>
                            {product.isPalindrome &&
                                <div className="product-properties">
                                    <span className="product-price-before">
                                        <b>Antes</b> <FormatNumber number={product.price} />
                                    </span>
                                </div>
                            }
                            <div className="product-properties">
                                <span className="product-price">
                                    {product.isPalindrome &&
                                        <FormatNumber number={product.pricePalindrome} />
                                    }
                                    {!product.isPalindrome &&
                                        <FormatNumber number={product.price} />
                                    }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Grid>
    );
}

ProductCard.prototype = {
    product: {
        id: PropTypes.number.isRequired,
        brand: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        isPalindrome: PropTypes.bool.isRequired,
        price: PropTypes.number.isRequired,
        pricePalindrome: PropTypes.number.isRequired
    }
}

export default ProductCard;