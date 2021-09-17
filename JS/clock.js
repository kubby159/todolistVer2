

const clock = document.getElementById('clock');

console.log(clock);

function getClock () {


    const date = new Date();
    const hours = String(date.getHours()).padStart(2,0);
    const minutes = String(date.getMinutes()).padStart(2,0);
   

    clock.innerHTML = `${hours} : ${minutes}`;

}

getClock();
setInterval(getClock, 1000);