import { getAllProducts } from "./product.js"
import { addToCart, getCartItems, getCartTotal } from "./cart.js"

console.log(getAllProducts())

console.log(addToCart(1, 2))
console.log(getCartItems())
console.log("Total:", getCartTotal())
