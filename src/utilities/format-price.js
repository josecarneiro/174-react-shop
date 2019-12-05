const formatPrice = price => {
  return (price.value / 100).toFixed(2);
};

export default formatPrice;
