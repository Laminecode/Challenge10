let tasklist = document.querySelector(".Todo .List")
const form = document.querySelector("#form");
let pair = document.querySelectorAll(".List");
let Add = document.getElementsByClassName('Add')[0]
let delet = document.getElementsByClassName('red');
let task = "" 
form.addEventListener('submit' , function(event){
    event.preventDefault();
    const formData = new FormData(form);
    task = formData.get('task');
    if(!ExistTest(task)){
        return
    }
    form.elements.task.value = ""
    createtask(task);
})


function createtask(tasktext){
    let div = document.createElement('div')
    div.classList.add('task')
    let taskname = document.createElement('span')
    taskname.innerHTML = tasktext
    taskname.classList.add('taskname')
    let bu_div = document.createElement('div')
    let delet_button = document.createElement('button')
    let edit_button = document.createElement('button')
    delet_button.innerHTML = "delete"
    edit_button.innerHTML = "edit"
    bu_div.style.marginRight = '15px'
    delet_button.classList.add('red')
    edit_button.classList.add('bleu')
    bu_div.appendChild(delet_button)
    bu_div.appendChild(edit_button)
    div.appendChild(taskname)
    div.appendChild(bu_div)
    tasklist.appendChild(div)
    // onclick function of delelt button 
    delet_button.addEventListener('click',() => {div.remove()}) 
    //onclick function of edit button 
    edit_button.addEventListener('click',function(){edithandel(div,taskname)})
}

function ExistTest(text){
    let tasks = document.querySelectorAll('.task')
    if(text === ""){
        alert('Add task name please')
        return false
    }
    for (let task of tasks){
        if (task.firstChild.innerHTML === text ){
            alert("these task is alredy exist ")
            return false
        } 
    }
    return true
}


function edithandel(div,taskname){
    let edit_form = document.createElement('form')
    let input = document.createElement('input')
    let bt = document.createElement('button')
    bt.innerHTML = "valid"
    input.name = 'task'
    edit_form.appendChild(input)
    edit_form.appendChild(bt)
    div.appendChild(edit_form)
    let text = div.firstChild.innerHTML
    edit_form.elements.task.value = text
    bt.addEventListener('click',function(){ 
        let newTaskText = edit_form.elements.task.value
        taskname.innerHTML = newTaskText;
        div.lastChild.remove()
        })
}