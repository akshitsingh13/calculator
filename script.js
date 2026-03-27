const display = document.querySelector(".display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}

function backSpace() {
    display.value = display.value.slice(0, -1);
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Backspace') {
        backSpace();
        return;
    }
    if (e.key === 'Enter') {
        calculate();
        return;
    }
    if (e.key === 'Escape') {
        clearDisplay();
        return;
    }
    const btn = document.getElementById(e.key);
    if (btn) btn.click();
})