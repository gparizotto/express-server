let products = [],
  index = 1;

function saveProduct(product) {
  product.id = index++;
  products.push(product);
  console.log(product);
}

function updateProduct(product, id) {
  products[id - 1] = product;
}

function deleteProduct(id) {
  const product = products[id - 1];
  delete products[id - 1];

  return product;
}

function getProduct(id) {
  return products[id - 1];
}

function getProducts() {
  return products;
}

module.exports = {
  saveProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
