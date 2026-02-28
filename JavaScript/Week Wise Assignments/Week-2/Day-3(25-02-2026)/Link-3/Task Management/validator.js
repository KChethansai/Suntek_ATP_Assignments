function validateTitle(title){
    if(!title){
        return 'Title required'
    }
    if(title.length<=3){
        return 'Min 3 char requred'
    }
    return 'Title is valid'
}


function validatePriority(priority){
    const priorities=['low','medium','high']
    let result=priorities.includes(priority)
    if(result){
        return true
    }
    else{
        return 'Invalid prority'
    }
}

function validateDueDate(date){
    let dueDate=new Date('2024-10-20')
    let today=new Date()
    if(dueDate>today){
        return true
    }
    return false
}

export {validateDueDate,validatePriority,validateTitle}