import products from './../data/products';

const listProducts = () => {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
};

// exports.listProducts = listProduct;
export { listProducts };

// module.exports = listProducts;
// export default listProducts;

const loadProduct = id => {};

export { loadProduct };
