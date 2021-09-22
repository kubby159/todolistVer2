const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

const TODOS_KEY = 'toDos'

let toDos = [];

function  saveTodos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}


function deleteList(event) {
    const deleteEvent = event.target.parentElement;
    deleteEvent.remove();
   
    toDos = toDos.filter(toDo => toDo.id !== parseInt(deleteEvent.id));
    
   
    saveTodos();
}



function paintToDo(newTodo) {

    const list = document.createElement('li');
    const btn = document.createElement('button');
    const span = document.createElement('span');


    list.appendChild(span);
    list.appendChild(btn);
    span.innerText = newTodo.text;
    list.id = newTodo.id;
    btn.innerText = "❌";
    btn.addEventListener('click',deleteList);
    todoList.appendChild(list);
    
}



function handleToDoSubmit(event) {
    
    event.preventDefault();
    const newTodo = todoInput.value;
   
    todoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id : Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    
    saveTodos();
}




todoForm.addEventListener('submit',handleToDoSubmit);

const getValue = localStorage.getItem(TODOS_KEY);
console.log(getValue);


if(getValue !== null) {

    const parsedToDos = JSON.parse(getValue);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
;}