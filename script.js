let currentInput = '';
let firstOperand = null;
let operator = null;
let isCalculated = false;

function appendToDisplay(value) {
    if (value === '.' && currentInput.includes('.')) {
        return;
    }
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function performOperation(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (operator && currentInput) {
        firstOperand = operate();
    }

    operator = op;
    currentInput = '';
}

function operate() {
    if (firstOperand === null || operator === null || currentInput === '') {
        document.getElementById('display').value = 'Error';
        return;
    }
    let result;
    switch (operator) {
        case '+':
            result = firstOperand + parseFloat(currentInput);
            break;
        case '-':
            result = firstOperand - parseFloat(currentInput);
            break;
        case '*':
            result = firstOperand * parseFloat(currentInput);
            break;
        case '/':
            if (parseFloat(currentInput) === 0) {
                document.getElementById('display').value = 'Cannot divide by zero';
                return;
            }
            result = firstOperand / parseFloat(currentInput);
            break;
    }
    result = parseFloat(result.toFixed(8));
    document.getElementById('display').value = result;
    currentInput = '';
    return result;
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operator = null;
    document.getElementById('display').value = '';
}
