//2.Find the big number in given three numbers
console.log('Finding the big number in given three numbers')
console.log()

let a=10
let b=20
let c=15
if(a>b && a>c){
    console.log(`${a} is greater than ${b} and ${c}`)
}
else if(b>c){
    console.log(`${b} is greater than ${a} and ${c}`)

}
else{ console.log(`${c} is greater than ${a} and ${b}`)
}