 //Original Object
 let user = {
    name: "Ravi",
    city: "Hyderabad"
    };
    //Copied Object
    let updatedUser={...user,age:25}
    //Check
    console.log('Original:',user)
    console.log('Copy:',updatedUser)