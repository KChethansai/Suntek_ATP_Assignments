const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10, category: "electronics" },
  { id: 2, name: "Phone", price: 30000, stock: 15, category: "electronics" }
];

function getProductById(id) {
  return products.find(p => p.id === id);
}

function getAllProducts() {
  return products;
}

function checkStock(id, qty) {
  const product = getProductById(id);
  return product && product.stock >= qty;
}

function reduceStock(id, qty) {
  const product = getProductById(id);
  if (product) product.stock -= qty;
}

export {getProductById,getAllProducts,checkStock,reduceStock}