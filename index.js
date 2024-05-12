const display = document.getElementById('result');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
let currentValue = '';
let prevValue = '';
let operator = '';

// Add event listeners to number buttons
numbers.forEach(number => {
    number.addEventListener('click', () => {
        currentValue += number.id;
        display.value = currentValue;
    });
});

// Add event listeners to operator buttons
operators.forEach(op => {
    op.addEventListener('click', () => {
        if (op.id === 'clear') {
            currentValue = '';
            prevValue = '';
            operator = '';
            display.value = '';
        } else if (op.id === 'backspace') {
            currentValue = currentValue.slice(0, -1);
            display.value = currentValue;
        } else if (op.id === 'percentage') {
            currentValue = parseFloat(currentValue) / 100;
            display.value = currentValue;
        } else if (op.id === 'equals') {
            const result = calculate(prevValue, operator, currentValue);
            display.value = result;
            currentValue = result.toString();
            prevValue = '';
            operator = '';
        } else {
            prevValue = currentValue;
            operator = op.id;
            currentValue = '';
        }
    });
});

// Function to perform calculations
function calculate(a, op, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (op) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            return b;
    }
}