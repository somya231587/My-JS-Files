let todos=getSavedData()//checked for saved data
console.log(todos)
render(todos) //for saved data DOM & display

document.querySelector('#create-task').addEventListener('submit',function(e){
    e.preventDefault()
    let taskName=e.target.elements.newTask.value
    console.log(taskName)
    const dateElem=moment().valueOf()
    todos.push({
        id:uuidv4(),
        title:taskName,
        body:'Not Defined',
        status:false,
        createdAt: dateElem,
        updatedAt: dateElem
    })
    //saveNewData(todos) //save new data onto localstorage
    //location.assign(`/createTask#${todos.id}`)
    render(todos) //display data on screen with set DOM structure
    saveNewData(todos)
    e.target.elements.newTask.value=''
})
//synching across edit pages & home pages on multiple tabs
window.addEventListener('storage',function(e){
    if(e.key==='todos'){
         todos=JSON.parse(e.newValue) // returns all the objects updated with new instant values
    }
    render(todos)
})

//dropdown options for display
drop.addEventListener('change',function(e){
    clearScr()
     //todos=getSavedData()
     if(e.target.value==='alltask'){
         const allt=todos.filter(function(e){
             return true
         })
         console.log(allt)
         const newp=document.createElement('h2')
         newp.textContent='All the scheduled tasks'
         all.appendChild(newp)
         allt.forEach(function(e){
             const newp=document.createElement('h3')
             newp.textContent=e.title
             all.appendChild(newp)
             const newb=document.createElement('p')
             newb.textContent=e.body
             all.appendChild(newb)
         })
     }
     if(e.target.value==='comptask'){
         const allt=todos.filter(function(e){
             return e.status
         })
         console.log(allt)
         const newp=document.createElement('h2')
         newp.textContent='All the completed tasks'
         com.appendChild(newp)
         allt.forEach(function(e){
             const news=document.createElement('h3')
             news.textContent=e.title
             com.appendChild(news)
             const newb=document.createElement('p')
             newb.textContent=e.body
             com.appendChild(newb)
         })
     }
     if(e.target.value==='incomptask'){
         const allt=todos.filter(function(e){
             return !e.status
         })
         console.log(allt)
         const newp=document.createElement('h2')
         newp.textContent='All the incomplete tasks'
         incom.appendChild(newp)
         allt.forEach(function(e){
             const newp=document.createElement('h3')
             newp.textContent=e.title
             incom.appendChild(newp)
             const newb=document.createElement('p')
             newb.textContent=e.body
             incom.appendChild(newb)
         })
     }
     if(e.target.value==='none'){clearScr()}
     
 })
 