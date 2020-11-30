const christmas = '25 Dec 2020';

const daysC = document.getElementById('num_days');
const hoursC = document.getElementById('num_hours');
const minC = document.getElementById('num_minutes');
const secC = document.getElementById('num_seconds');

console.log(daysC);

function countdown(){
    const christmasDate = new Date(christmas);
    const currDate = new Date();

    const totalSec = (christmasDate - currDate)/ 1000;
    
    const days = Math.floor(totalSec / 3600 / 24);
    const hours = Math.floor(totalSec / 3600) % 24;
    const min = Math.floor(totalSec / 60 ) % 60;
    const sec = Math.floor(totalSec) % 60;

    daysC.innerHTML = days;
    hoursC.innerHTML = hours;
    minC.innerHTML = min;
    secC.innerHTML = sec;



}

countdown();

setInterval(countdown, 1000);