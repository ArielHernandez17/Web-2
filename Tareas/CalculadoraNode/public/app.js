const screen = document.getElementById('screen');

function addToScreen(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value = '';
}

function solve() {
    try {
        // eval() procesa el string como una operación matemática
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Error';
    }
}