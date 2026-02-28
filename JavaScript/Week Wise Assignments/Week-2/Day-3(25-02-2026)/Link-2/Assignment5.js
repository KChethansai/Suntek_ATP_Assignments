const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//Filter all credit transactions
const ctrans=transactions.filter(transObj=>transObj.type==='credit')
console.log('All the credit transactions:',ctrans)

//map() to extract on transaction account balance
const accBal=transactions.map(transObj=>transObj.amount)
console.log('Only Account Balances:',accBal)

//Reduce to calculate the final account balance
const fAccBal=transactions.reduce((acc,transObj)=>acc+transObj.amount,0)
console.log('Final account balance:',fAccBal)

//find the first debit transaction
const key=transactions.find(transObj=>transObj.type==='debit')
console.log('First occurence of debit transaction:',key)

//find index of transaction with amount 10000
const fkey=transactions.findIndex(transObj=>transObj.amount===10000)
console.log('Index of tranaction with an amount of 10000:',fkey)