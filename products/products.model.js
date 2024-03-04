const products = [
  {
    id: 'red-shoe',
    description: 'Red Shoe',
    price: 42.12,
  },
  {
    id: 'blue-jean',
    description: 'Blue Jean',
    price: 55.23,
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
}

function getProductById(id) {
  return products.find((product) => {
    return product.id === id;
  });
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
};
