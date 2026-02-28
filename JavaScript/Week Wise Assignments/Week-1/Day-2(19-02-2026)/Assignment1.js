const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

emp={
    eno:106,
    name:'Sandeep',
    marks:[90,83,78]
}
//1.Insert new Emp at 2nd position
employees.splice(1,0,emp)

//2.Remove an emp with name "Kiran"
for(v in employees){
    if(employees[v].name==='Kiran'){
        employees.splice(v,1)
    }
}

//3.Change the last mark 95 to 75 of emp  "Sneha"
for(v in employees){
    if(employees[v].name==='Sneha'){
        employees[v].marks.splice(2,1,78)
    }
}


console.log(employees)
