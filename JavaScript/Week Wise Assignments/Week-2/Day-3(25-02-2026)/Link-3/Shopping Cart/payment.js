import { reduceStock } from "./product.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";

function processPayment() {
  const items = getCartItems();
  const total = getCartTotal();

  items.forEach(item => {
    reduceStock(item.id, item.qty);
  });

  clearCart();

  return {
    items,
    total,
    status: "Payment Successful"
  };
}

export {processPayment}