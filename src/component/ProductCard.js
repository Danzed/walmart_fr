import React, { Component } from 'react';
import './ProductCard.css';

class ProductCard extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="card">
                        <div className="card-head">
                            <img src="https://www.walmartchile.cl/views/layout/walmartchile/img/logo-walmartchile.png" alt="logo" className="card-logo" />
                            <img src="https://www.lider.cl/catalogo/images/babyIcon.svg" alt="Shoe" className="product-img" />
                            {/* <div className="product-detail">
                                <h2>Hartbeespoort</h2> Support and Nike Zoom Air come together for a more supportive feel with high-speed responsiveness
                            </div> */}
                            {/* <span className="back-text">
                                Lider
                            </span> */}
                        </div>
                        <div className="card-body">
                            <div className="product-desc">
                                <span className="product-title">
                                    dsaasd
                                    {/* <span className="badge">
                                        New
                                    </span> */}
                                </span>
                                <span className="product-caption">
                                    zlrwax bñyrh
                                </span>
                                {/* <span className="product-rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star grey"></i>
                                </span> */}
                            </div>
                            <div className="product-properties">
                                <span className="product-price-before">
                                    <b>Antes</b> $600.000
                                </span>
                            </div>
                            <div className="product-properties">
                                {/* <span className="product-size">
                                    <h4>Size</h4>
                                    <ul className="ul-size">
                                        <li><a href="#">7</a></li>
                                        <li><a href="#">8</a></li>
                                        <li><a href="#">9</a></li>
                                        <li><a href="#" className="active">10</a></li>
                                        <li><a href="#">11</a></li>
                                    </ul>
                                </span> */}
                                {/* <span className="product-color">
                                    <h4>Colour</h4>
                                    <ul className="ul-color">
                                        <li><a href="#" className="orange active"></a></li>
                                        <li><a href="#" className="green"></a></li>
                                        <li><a href="#" className="yellow"></a></li>
                                    </ul>
                                </span> */}
                                <span className="product-price">
                                    $400.000
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductCard;