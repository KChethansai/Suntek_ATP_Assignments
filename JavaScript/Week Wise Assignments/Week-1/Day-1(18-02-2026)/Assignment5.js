//Write a function that receives three number args and return the big number

function findBigNumber(a,b,c){
    if(a>b && a>c){
        return a
    }
    else if(b>c){
        return b
    }
    else{
        return c
    }
}

let a=10
let b=20
let c=30
let x=findBigNumber(a,b,c)
console.log(`The biggest number among ${a}, ${b} and ${c} is ${x}`)
