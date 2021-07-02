//to operate on the create task webpage
const tname=document.querySelector('#name')
const tbody=document.querySelector('#body')
const lastEdit=document.querySelector('#last-edited')
const id=location.hash.substring(1) // to capture the id of the task link clicked
console.log(id)
let tasks=getSavedData()
//console.log(tasks)
task=tasks.find(function(x){
    return x.id===id
})

if(task!=undefined){
    console.log(task)
    tname.value=task.title //display default creation name in edit area
    tbody.value=task.body // display task body in edit area by default
    lastEdit.textContent=`last updated ${moment(task.updatedAt).fromNow()}`
}else{
    location.assign('index.html')
}
tname.addEventListener('input',function(e){
    task.title=e.target.value
    task.updatedAt=moment().valueOf()
    saveNewData(tasks)
    lastEdit.textContent=`last updated ${moment(task.updatedAt).fromNow()}`
    console.log(task)
})
tbody.addEventListener('input',function(e){
    task.body=e.target.value
    task.updatedAt=moment().valueOf()
    saveNewData(tasks)
    lastEdit.textContent=`last updated ${moment(task.updatedAt).fromNow()}`
    console.log(task)
})
//adding event listener to synch different or multiple webpages live
window.addEventListener('storage',function(e){
    if(e.key==='todos'){
        console.log(e)
        console.log(e.newValue)
        task=JSON.parse(e.newValue)
        console.log(task)
        tasc=task.find(function(x){
            return x.id===id
        })}
        if(tasc===undefined){
            location.assign('index.html')
        }
        tname.value=tasc.title
        tbody.value=tasc.body
        lastEdit.textContent=`last updated ${moment(task.updatedAt).fromNow()}`
    })

    //console.log(window)