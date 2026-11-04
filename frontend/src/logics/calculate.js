function calculate(num1, operation, num2) {

    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 == 0) {
                return "0 is not allowed as divisor"
            }
            else {
                return num1 / num2
            };
        case '%':
            return num1 % num2;
        default:
            return "Invalid operator"
    }

}

export default calculate;