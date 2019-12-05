import React, { Component } from 'react';
import './style.scss';

import formatPrice from './../../utilities/format-price';

class Product extends Component {
  render() {
    const name = this.props.name;
    const image = this.props.image;
    const units = this.props.unitsLeft;
    const price = this.props.price;
    return (
      <div className="product-item">
        <div className="product-item__header">
          <img src={image} alt={name} />
          {/* <span>Only {units} left!</span> */}
        </div>
        <div className="product-item__details">
          <h5>{name}</h5>
          <span>{formatPrice(price)}</span>
        </div>
      </div>
    );
  }
}

export default Product;
