window.addEventListener('load',showtask);
let input = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let tasks;
if(!localStorage.getItem('todo')){
    tasks = [];
    localStorage.clear();

}else{
    tasks= gettask();
}

btn.addEventListener('click', ()=>{
    let text = input.value;
    let task =createLI(text);
    task.innerHTML+=' <span class="closebtn" ><i class="fa-solid fa-trash"></i></span>'
    saveTask(text);
    ul.appendChild(task);
    input.value = ""
})
ul.addEventListener('click', (e)=>{
    if(e.target.nodeName==='I'){
        let target = e.target.parentElement.parentElement;
        target.style.display = 'none';
        tasks.splice(tasks.indexOf(target.textContent), 1);
        localStorage.setItem('todo',tasks);
        

    }
    if(e.target.nodeName==='LI'){
        e.target.classList.toggle('done');
    }

})


function createLI(text1){
    let li = document.createElement('li');
    li.textContent = text1;
    return li;

}

function saveTask(text){
    tasks.push(text);
    localStorage.setItem('todo', tasks);
}
function gettask(){
    return localStorage.getItem('todo').split(',');

} 

function showtask(){
    for (let taskText of gettask()) {
        let task =createLI(taskText);
        task.innerHTML+=' <span class="closebtn" ><i class="fa-solid fa-trash"></i></span>'
        ul.appendChild(task);
        
    }
    
    

}
