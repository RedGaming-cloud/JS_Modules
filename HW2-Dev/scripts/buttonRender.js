export function btnRender() {
    const main = document.querySelector('.main');
    main.insertAdjacentHTML('afterbegin', '<div class="button-block"><div class="button" id="calcDate">Калькулятор дат</div><div class="button" id="timerButton">Таймер</div></div>');
};

export function toggler() {
    let buttons = document.querySelector('.button-block');
    const calcBtn = document.getElementById('calcDate')
    const timerBtn = document.getElementById('timerButton')
    buttons.addEventListener('click', (event) => {
        if (event.target === calcBtn) {
            document.querySelector('.datecalc').classList.toggle('hidden');
        } if (event.target === timerBtn) {
            document.querySelector('.timer').classList.toggle('hidden');
        }
    })
}