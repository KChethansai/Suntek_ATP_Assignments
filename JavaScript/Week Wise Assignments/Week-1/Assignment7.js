//Write a function that receives an array & search element as args and return the index of th esearch element in the array.It should reutrn 'Not found' if the search element is not found in the array.
function searchElement(arr,key){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===key){
            return i
        }
    }
    return "Not found"
}

let arr=[10,20,30,40,50]
let key=30
let x=searchElement(arr,key)
console.log(`The index of ${key} in the array ${arr} is ${x}`)