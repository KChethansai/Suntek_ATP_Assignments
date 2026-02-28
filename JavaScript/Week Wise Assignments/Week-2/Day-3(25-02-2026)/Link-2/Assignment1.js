const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Only inStock products
const stock=cart.filter(cartObj=>cartObj.inStock===true)
console.log('Products in stock:',stock)
//New array with name and total price 
const bill=cart.map((cartObj)=> ({
  name: cartObj.name,
  price : cartObj.price*cartObj.quantity
})
)
console.log('Bill:',bill)

//Total of cart
const totalAmount=cart.reduce((acc,cartObj)=>acc+(cartObj.price*cartObj.quantity),0)
console.log('Total Price:',totalAmount)

//Details of a certain product
const det=cart.find(cartObj=>cartObj.name==='Mouse')
console.log('Deatils of customer who purchased a Mouse:',det)

//FindIndex of keyboard
const keyIndex=cart.findIndex(cartObj=>cartObj.name==='Keyboard')
console.log('Index of customer who bought a Keyboard:',keyIndex)