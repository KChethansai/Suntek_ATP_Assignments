import {addTask,getAllTask,completeTask } from "./task.js"

addTask('Coding','high','12-12-2024')
addTask('Gaming','high','28-02-2026')
addTask('Projects','high','28-02-2026') 
completeTask('Gaming')
const t=getAllTask()
console.log(t)