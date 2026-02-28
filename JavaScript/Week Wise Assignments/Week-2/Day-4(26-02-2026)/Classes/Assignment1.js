class Book{
    title
    author
    pages
    isAvailable=true

    constructor(title,author,pages){
        this.title=title
        this.author=author
        this.pages=pages
    }

    borrow(){
        this.isAvailable=false
    }

    returnBook(){
        this.isAvailable=true
    }

    getInfo(){
        return `${this.title} by ${this.author} (${this.pages})`
    }

    isLongBook(){
        if(this.pages>300){
            return true
        }
        return false
    }
}

let count=0
let book1=new Book('Harry potter','J.R.R',310)
let book2=new Book('ORV','KA',3600)
let book3=new Book('TBATE','TurtleMe',2500)
let book4=new Book('RI','CA',280)
let book5=new Book('LOTM','CA2',3000)
//Info of all Books
console.log(book1.getInfo())
console.log(book2.getInfo())
console.log(book3.getInfo())
console.log(book4.getInfo())
console.log(book5.getInfo())
console.log()

//Borrowing 2 books and showing their status
book4.borrow()
console.log('Book 4 status:',book4.isAvailable)
book5.borrow()
console.log('Book 5 status:',book5.isAvailable)
console.log()

//Returning a book
book5.returnBook()
console.log('Book 5 status:',book5.isAvailable)
console.log()

//Counting if books are long books
let Books=[book1,book2,book3,book4,book5]
for(let book of Books){
    if(book.isLongBook()===true){
        count++
    }
}
console.log('Count of long books:',count)

//Listing all available books
for(let book of Books){
    if(book.isAvailable===true){
        console.log(`${book.title} is Available`)
    }
}