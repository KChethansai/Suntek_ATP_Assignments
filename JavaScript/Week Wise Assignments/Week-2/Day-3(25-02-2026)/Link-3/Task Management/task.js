import { validateDueDate,validatePriority,validateTitle } from "./validator.js"
function addTask(title,priority,dueDate){
    if(!validateTitle(title) && !validatePriority(priority) && !validateDueDate(dueDate)){
        return 'Invalid task'
    }
    tasks.push({title,priority,dueDate})
    return true
}

function getAllTask(){
    return tasks
    }

function completeTask(task){
    for(let name in tasks){
        if(tasks[name].title===task){
            tasks.splice(name,1)
        }
    }
}

const tasks=[]
export {addTask,getAllTask,completeTask}
