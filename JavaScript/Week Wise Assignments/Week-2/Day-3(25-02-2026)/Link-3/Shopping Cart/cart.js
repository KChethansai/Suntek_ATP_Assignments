import { getProductById, checkStock } from "./product.js";

let cart = [];

function addToCart(id, qty) {
  if (!checkStock(id, qty)) return "Not enough stock";

  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty += qty;
  } else {
    cart.push({ id, qty });
  }

  return "Added to cart";
}

function getCartItems() {
  return cart.map(item => {
    const product = getProductById(item.id);
    return {
      name: product.name,
      price: product.price,
      qty: item.qty,
      total: product.price * item.qty
    };
  });
}

function getCartTotal() {
  return getCartItems().reduce((sum, item) => sum + item.total, 0);
}

function clearCart() {
  cart = [];
}
export {addToCart,getCartItems,getCartTotal,clearCart}