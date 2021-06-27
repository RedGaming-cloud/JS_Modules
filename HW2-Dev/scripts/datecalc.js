import { DateTime } from "luxon";
import { formatError } from "./utils.js"; // 2

const dateTime = DateTime;
const dateCalcResult = document.getElementById("datecalc__result");

export function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    }
    else formatError;
};

export function diffDates(firstDate, secondDate) {
    firstDate = dateTime.fromISO(firstDate);
    secondDate = dateTime.fromISO(secondDate);

    if (firstDate > secondDate)
        secondDate = [firstDate, firstDate = secondDate][0]; // 2

    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}

// 3
export const diffToHtml = diff => `
    <span> 
        ${diff.years ? 'Лет: ' + diff.years : ''}
        ${diff.months ? 'Месяцев: ' + diff.months : ''}
        ${diff.days ? 'Дней: ' + diff.days : ''}
    </span>
`;