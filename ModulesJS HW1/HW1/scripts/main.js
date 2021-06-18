import { handleCalcDates } from "./datecalc.js";
import { lastTimesRender, timer } from "./timer.js"
import { buttonRender, toggler } from "./buttonRender.js"


const dateCalcForm = document.getElementById("datecalc");
dateCalcForm.addEventListener("submit", handleCalcDates);

document.getElementById('timerStart').onclick = () => {
    let secondsLast = parseInt((document.getElementById('hours').value * 3600)) + parseInt((document.getElementById('minutes').value * 60)) + parseInt(document.getElementById('seconds').value);
    lastTimesRender(secondsLast);
    timer(secondsLast);
};
document.getElementById('timerStop').onclick = () => {
    secondsLast = 0;
}

buttonRender();
toggler();