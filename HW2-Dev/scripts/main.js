
import { handleCalcDates } from "./datecalc.js";
import { lastTimesRender, timer } from "./timer.js"
import { btnRender, toggler } from "./buttonRender.js"
import '../styles/style.css'
import '../sounds/pozyvnye-radio-mayak1980-god.mp3'


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

btnRender();
toggler();