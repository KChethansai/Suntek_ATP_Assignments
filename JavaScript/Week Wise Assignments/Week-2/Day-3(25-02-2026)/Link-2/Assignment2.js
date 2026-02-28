const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//Students who passed(marks>=40)
 const passed=students.filter(studenObj=>studenObj.marks>=40)
 console.log('Students who passed: ',passed)

 //Grade Allocation based on marks
 const grades=students.map(studenObj=>{
    if(studenObj.marks>=90){
        return 'A'
    }
    else if(studenObj.marks>=75){
        return 'B'
    }
    else if(studenObj.marks>=60){
        return 'C'
    }
    else{
        return 'D'
    }
 })
 console.log('Student Grades: ',grades)

 //Average marks
 const avgMarks=students.reduce((acc,studenObj)=> acc+studenObj.marks,0)
 console.log('Average marks:',avgMarks/students.length)

 //Student who scored 92 marks
 const topper=students.find(studenObj=>studenObj.marks===92)
 console.log('Student with marks as 92:',topper)

 //Index of Kiran
 const key=students.findIndex(studenObj=>studenObj.name==='Kiran')
 console.log('Index of Kiran:',key)