
const clock = document.querySelector('.time span');


function nowTimes() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,0);
    const minutes = String(date.getMinutes()).padStart(2,0);
    const seconds = String(date.getSeconds()).padStart(2,0);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}


nowTimes();
setInterval(nowTimes,1000);