const order = {
    orderId: "ORD1001",
    customer: {
    name: "Anita",
    address: {
        city: "Hyderabad",
        pincode: 500085
        }
    },
    items: [
        { product: "Laptop", price: 70000 }
        ]
    };
    //1. Create a deep copy of order
    let copyOrder=structuredClone(order)
    //2. Modify in copied object:
            //i. customer.address.city
            //ii. items[0].price
            //iii. Verify original object remains unchanged
    copyOrder.customer.city='Chennai'
    copyOrder.items[0].price=68000

    console.log('Original:',order)
    console.log('Copy:',copyOrder)