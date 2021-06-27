import { sound } from "./sound.js";

export function lastTimesRender(secondsLast) {
    const inTimer = document.getElementById('inTime');
    let lastHours = Math.floor(secondsLast / 3600);
    let lastMinutes = Math.floor((secondsLast - (lastHours * 3600)) / 60);
    let lastSeconds = secondsLast - ((lastHours * 3600) + (lastMinutes * 60));
    inTimer.innerHTML =
        `<span>
            Осталось: ${lastHours} часов, ${lastMinutes} минут и ${lastSeconds} секунд
        </span>`
};

export function timer(secondsLast) {
    let checker = 0;
    let timerInt = setInterval(
        () => {
            lastTimesRender(secondsLast - checker);
            if (checker === secondsLast) {
                clearInterval(timerInt)
                sound();
            }
            checker++;
        }, 1000);
};