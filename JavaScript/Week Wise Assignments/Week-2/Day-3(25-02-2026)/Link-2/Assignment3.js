const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//Employees From IT Department
const itEmp=employees.filter(employeeObj=>employeeObj.department==='IT')
console.log('Employees from IT department:',itEmp)

//netSalary
const netSalary=employees.map(employeeObj=>employeeObj.salary+(employeeObj.salary*0.10))
console.log('Bonus salary added:',netSalary)

//Total salary payout
const totalSalary=employees.reduce((acc,employeeObj)=>acc+(employeeObj.salary+(employeeObj.salary*.10)),0)
console.log('Total salary payout:',totalSalary)

//Employee with salary of 30000
const emp30=employees.find(employeeObj=>employeeObj.salary===30000)
console.log('Employee with a salary of 30000:',emp30)

//Index of Neha
const key=employees.findIndex(employeeObj=>employeeObj.name==='Neha')
console.log('Index of Neha:',key)

