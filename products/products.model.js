const products = [
  {
    id: 'red-shoe',
    description: 'Red Shoe',
    price: 42.12,
    reviews: [],
  },
  {
    id: 'blue-jean',
    description: 'Blue Jean',
    price: 55.23,
    reviews: [],
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

function addNewProduct(id, description, price) {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
};
