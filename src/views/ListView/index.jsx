import React, { Component } from 'react';
import Product from './../../components/Product';

import { listProducts } from './../../services/product';

import './style.scss';

class ListView extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    listProducts()
      .then(products => {
        this.setState({
          products: products
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const products = this.state.products;
    return (
      <div>
        <h1>Product List</h1>
        <div className="product-list">
          {products.map(product => {
            return <Product key={product.name} {...product} />;
          })}
        </div>
      </div>
    );
  }
}

export default ListView;
