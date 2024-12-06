const display = document.getElementById('display');

function appendNumber(number) {
    display.textContent += number;
}

function appendOperator(operator) {
    const current = display.textContent.trim();
    if (current && !isNaN(current[current.length - 1])) {
        display.textContent += ` ${operator} `;
    }
}

function clearDisplay() {
    display.textContent = '';
}

function addition(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
function subtraction(numbers) {
    return numbers.reduce((difference, num) => difference - num);
}

function calculateResult() {
    try {
        const expression = display.textContent.trim();
        const tokens = expression.split(' ');
        let result;

        if (tokens.length < 3) {
            throw new Error("Incomplete expression");
        }

        const numbers = tokens.filter((_, index) => index % 2 === 0).map(Number);
        const operators = tokens.filter((_, index) => index % 2 !== 0);

        if (operators.length === 1) {
            switch (operators[0]) {
                case '+':
                    result = addition(numbers);
                    break;
                case '-':
                    result = subtraction(numbers);
                    break;
                default:
                    throw new Error("Invalid operator");
            }
        } else {
            throw new Error("Only one operator is supported at a time");
        }

        display.textContent = result;
    } catch (error) {
        alert('Invalid expression');
        display.textContent = '';
    }
}