const todos=[{
    task:"Wake up at 6:30 AM",
    status:false
},{
    task:"Water the plants",
    status:false
},{
    task:"Drink pre-workout",
    status:false
},{
    task:"Workout Session",
    status:false
},{
    task:"Finish java-script course from Udemy",
    status:false
},{
    task:"Discussion with Soumya",
    status:false
},{
    task:"Sleep by 12:00 AM",
    status:false
}]
//function to add new task from form
const addTodo=function(ntask){
    const obj={
        task:ntask,
        status:false
    }
    console.log(obj)
    todos.push(obj)
    console.log(todos)
}

//function to update each task status
const changeStat=function(todosObj,stat){
    todosObj.status=stat 
    console.log(todosObj)
}

// listening to checkoxes
document.querySelector('#wake-up').addEventListener('change',function(e){
    console.log(e.target.checked)
    if(e.target.checked){
        changeStat(todos[0],true)
    }
    else{
        changeStat(todos[0],false)
    }
})
document.querySelector('#water-plant').addEventListener('change',function(e){
    console.log(e.target.checked)
    if(e.target.checked){
        changeStat(todos[1],true)
    }
    else{
        changeStat(todos[1],false)
    }
})
document.querySelector('#drink').addEventListener('change',function(e){
    console.log(e.target.checked)
    if(e.target.checked){
        changeStat(todos[2],true)
    }
    else{
        changeStat(todos[2],false)
    }
})
document.querySelector('#workout').addEventListener('change',function(e){
    console.log(e.target.checked)
    if(e.target.checked){
        changeStat(todos[3],true)
    }
    else{
        changeStat(todos[3],false)
    }
})
document.querySelector('#javas').addEventListener('change',function(e){
    console.log(e.target.checked)
    if(e.target.checked){
        changeStat(todos[4],true)
    }
    else{
        changeStat(todos[4],false)
    }
})
document.querySelector('#discuss').addEventListener('change',function(e){
    console.log(e.target.checked)
    if(e.target.checked){
        changeStat(todos[5],true)
    }
    else{
        changeStat(todos[5],false)
    }
})
document.querySelector('#rest').addEventListener('change',function(e){
    console.log(e.target.checked)
    if(e.target.checked){
        changeStat(todos[6],true)
    }
    else{
        changeStat(todos[6],false)
    }
})

const clearDisp=function(){
    document.querySelector('#all-tasks').innerHTML=''
    document.querySelector('#comp-tasks').innerHTML=''
    document.querySelector('#incomp-tasks').innerHTML=''
}
// rendering based on select from dropdown options
// All the Tasks
document.querySelector('#dropdown').addEventListener('change',function(e){
    if(e.target.value==='alltask'){
        const alltodo=todos.filter(function(x){
            return true
        })
        clearDisp()
        const newp=document.createElement('h1')
        newp.textContent=" All The Tasks Scheduled for Today "
        document.querySelector('#all-tasks').appendChild(newp)
        alltodo.forEach(function(x){
            const newp=document.createElement('h2')
            newp.textContent=x.task
            document.querySelector('#all-tasks').appendChild(newp)
        })
    }
})
// Completed Tasks
document.querySelector('#dropdown').addEventListener('change',function(e){
    if(e.target.value==='comptask'){
        const alltodo=todos.filter(function(x){
            return x.status
        })
        clearDisp()
        const newp=document.createElement('h1')
        newp.textContent=" All The Tasks Completed for Today "
        document.querySelector('#comp-tasks').appendChild(newp)
        alltodo.forEach(function(x){
            const newp=document.createElement('h2')
            newp.textContent=x.task
            document.querySelector('#comp-tasks').appendChild(newp)
        })
    }
})
// Pending Tasks
document.querySelector('#dropdown').addEventListener('change',function(e){
    if(e.target.value==='incomptask'){
        const alltodo=todos.filter(function(x){
            return !x.status
        })
        clearDisp()
        const newp=document.createElement('h1')
        newp.textContent=" All The Tasks Pending for Today "
        document.querySelector('#incomp-tasks').appendChild(newp)
        alltodo.forEach(function(x){
            const newp=document.createElement('h2')
            newp.textContent=x.task
            document.querySelector('#incomp-tasks').appendChild(newp)
        })
    }
})

// Clear Display
document.querySelector('#clear').addEventListener('click',function(e){
    e.target.textContent="Cleared"
    clearDisp()
})

//Add new Tasks
document.querySelector('#newTodoEntered').addEventListener('submit',function(e){
    e.preventDefault()
    const todoTask=e.target.elements.newtask.value
    e.target.elements.newtask.value=''
    addTodo(todoTask)
})
//new tasks status update from checkbox
document.querySelector('#newadd').addEventListener('change',function(e){
    console.log(e.target.checked)
    console.log(todos.length)
    if(todos.length>7){
        const remLength=todos.length-7
        for(let i=7;i<todos.length;i++){
            if(e.target.checked){
                changeStat(todos[i],true)
            }
            else{
                changeStat(todos[i],false)
            }
        }
    }
})
