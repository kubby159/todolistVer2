
const loginForm = document.querySelector('#login-form');
const loginBox = document.querySelector('.login__box')
const loginInput = document.querySelector('#login-input');
const greeting = document.querySelector('#greeting');
console.log(greeting);


const USERNAME_KEY = 'username';


function onLoginSubmit(event){
    event.preventDefault();
    loginBox.classList.add('hidden');
    const userName = loginInput.value;
    console.log(userName);
    localStorage.setItem('USERNAME_KEY',userName);
    paintGreeting(userName)   

}


function paintGreeting(username) {

    greeting.innerText = `Nice to meet you, ${username}`;
    greeting.classList.remove('hidden')
}




const savedUserName = localStorage.getItem('USERNAME_KEY');
console.log(savedUserName);




if(savedUserName === null) {

    loginBox.classList.remove('hidden');
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    loginBox.classList.add('hidden');
    paintGreeting(savedUserName);
}