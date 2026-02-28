const courses = ["javascript", "react", "node", "mongodb", "express"];

//Course name whose length is greater than 5
const len=courses.filter(course=>course.length>5)
console.log('Courses whose length > 5:',len)

//To Uppercase
const upc=courses.map(course=>course.toUpperCase())
console.log('All name in uppercase:',upc)

//Course is react
const nkey=courses.filter(course=>course==='react')
console.log('Course is react:',nkey)

//FindIndex of node
const ni=courses.findIndex(course=>course==='node')
console.log('Index of node:',ni)