//checking for prev stored data on global storage 
const getSavedData=function(){
    const task=localStorage.getItem('todos')
    if(task!==null){
        return JSON.parse(task)}else{
        return []
    }
    console.log(todos)
}
//sving new data onto the global storage
const saveNewData=function(todos){
    localStorage.setItem('todos',JSON.stringify(todos))
    console.log(todos)
}
//Defining the DOM structure for tasks created
const setDOM=function(todosObj){//
    const newp=document.createElement('div')
    //appending checkbos at the begining
    const check=document.createElement('input')
    check.setAttribute('type','checkbox')
    newp.appendChild(check)
    //tagging new task as anchor and link attachment
    const text=document.createElement('a')
    text.setAttribute('href',`/createTask.html#${todosObj.id}`)
    let task=todosObj.title
    if(task.length > 0){
        text.textContent=task+" "}else{
            text.textContent="Not Named "
            todosObj.title="Not Named"
    }
    newp.appendChild(text)
    //adding remove button
    const butt=document.createElement('button')
    butt.textContent='X'
    newp.appendChild(butt)
    butt.addEventListener('click',function(e){ //removing notes
        removeTask(todosObj.id)
        saveNewData(todos)
        render(todos)
    })
    if (todosObj.status===true){
        check.checked=true //to check completed tasks from global storage in case of refresh
        }
    
    check.addEventListener('change',function(e){ //changing status of task
        if(e.target.checked){
            todosObj.status=true}
        else{
            todosObj.status=false
        }
        saveNewData(todos)
    })
    return newp
}

//for display of the DOM for each object on web page
const render=function(todos){
    document.querySelector('#new-tasks').innerHTML=''
    const tasks=todos.filter(function(x){
        return true
    })
    tasks.forEach(function(x){
        const newp=setDOM(x)
        document.querySelector('#new-tasks').appendChild(newp)
    })
}

//removing task
const removeTask=function(id){
    todos=getSavedData()
    const rindex=todos.findIndex(function(x){
        return x.id===id
    })
    todos.splice(rindex,1)
    console.log(todos)
    
}

//to select output from dropdown
const drop=document.querySelector('#dropdown')
const all=document.querySelector('#all-task')
const com=document.querySelector('#com-task')
const incom=document.querySelector('#incom-task')
const clearScr=function(){
    all.innerHTML=''
    com.innerHTML=''
    incom.innerHTML=''
}

