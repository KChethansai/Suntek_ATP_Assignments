const marks = [78, 92, 35, 88, 40, 67];

//Pass marks
const pass=marks.filter(mark=>mark>=40)
console.log('Marks >=40 :',pass)

//Add 5 grace marks to each student
const gmarks=marks.map(mark=>mark+5)
console.log('After giving 5 grace marks:',gmarks)

//Hishes marks 
const max=marks.reduce((acc,mark)=>acc<mark? mark:acc)
console.log('Highest marks in the class',max)

//marks below 40
const key=marks.find(mark=>mark<40)
console.log('Marks below 40:',key)

//Index of 92
const fkey=marks.findIndex(mark=>mark===92)
console.log('Index of 92:',fkey)