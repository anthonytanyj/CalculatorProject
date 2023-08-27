function addition(a,b){
    a_int = parseInt(a);
    b_int = parseInt(b);

    return a_int + b_int
}

function subtract(a,b){
    a_int = parseInt(a);
    b_int = parseInt(b);

    return a_int - b_int
}

function multiply(a,b){
    a_int = parseInt(a);
    b_int = parseInt(b);

    if (b_int === 0){
        return "ERROR"
    }
    return a_int * b_int
}

function divide(a,b){
    a_int = parseInt(a);
    b_int = parseInt(b);

    return a_int / b_int
}

function operate(number1, operator, number2) {
    let result;
    switch (operator) {
        case '+':
            result = addition(number1, number2);
            break;
        case '-':
            result = subtract(number1, number2);
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            if (parseInt(number2) === 0) {
                return "Cannot divide by zero";
            }
            result = divide(number1, number2);
            break;
        default:
            return "Invalid operator";
    }
    return result;
}