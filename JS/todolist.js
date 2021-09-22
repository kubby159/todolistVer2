const todolistIcon = document.querySelector('.todolist-icon');
const todolistInput = document.querySelector('.todolist-box');
console.log(todolistInput)

function showlist() {
    
    todolistInput.classList.remove('hidden');
    todolistIcon.classList.add('hidden');

}


todolistIcon.addEventListener('click',showlist)