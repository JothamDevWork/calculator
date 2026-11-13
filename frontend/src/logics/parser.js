const input = "10+-*5";
const operators = "+-*/%";
let numbers = [];
let currentNum = "";
let foundoperators = [];
let result;
let leftnum;
let rightnum;
for (let i = 0; i < input.length; i++) {
    console.log(`${i} ${input[i]}`);


    if (input[i] === "-") {
        console.log(`Minus found at index:${i}`);
        console.log(`Character before minus:${input[i - 1]}`);

        if (i === 0) {
            console.log(`Minus is at the beginning: ${input[i]}`);
        }

        if (i === 0 || operators.includes(input[i - 1])) {
            console.log('Unary minus: Negation');

            if (operators.includes(input[i + 1]) && input[i + 1] !== "-") {
                throw Error(`${input[i + 1]} is invalid because  two operators cannot be next ot each other`);
            }

            if (/[0-9]/.test(input[i + 1])) {
                currentNum += "-";
                i++;


                while (/[0-9]/.test(input[i]) || /[.]/.test(input[i])) {



                    currentNum += input[i];
                    i++;

                }
                i--;

                numbers.push(currentNum);
                currentNum = "";
            } else {
                throw Error("invalid unary minus");
            }
        } else {


            foundoperators.push(input[i]);

        }
    } else if (operators.includes(input[i])) {

        if (operators.includes(input[i + 1]) && input[i + 1] !== "-") {
            throw Error(`${input[i + 1]} is invalid because  two operators cannot be next ot each other`);
        }

        foundoperators.push(input[i]);

    } else if (/[0-9]/.test(input[i]) || /[.]/.test(input[i])) {

        while (/[0-9]/.test(input[i]) || /[.]/.test(input[i])) {
            currentNum += input[i];
            i++;
        }
        i--;
        numbers.push(currentNum);
        currentNum = "";
    }



}

console.log(numbers);
console.log(foundoperators);


while (foundoperators.includes("*") || foundoperators.includes("/") || foundoperators.includes("%")) {


    let index = foundoperators.findIndex(operator => operator === "*" || operator === "/" || operator === "%");
    let operator = foundoperators[index];

    if (operator === "*") {

        leftnum = numbers[index];
        rightnum = numbers[index + 1];
        result = Number(leftnum) * Number(rightnum);
    } else if (operator === "/") {

        leftnum = numbers[index];
        rightnum = numbers[index + 1];
        if (Number(rightnum) === 0) {
            throw new Error("Cannot Divide By 0");
        } else {
            result = Number(leftnum) / Number(rightnum);
        }

    } else {


        leftnum = numbers[index]
        rightnum = numbers[index + 1];

        if (Number(rightnum) === 0) {
            throw new Error("Cannot get modulo by 0");
        } else {
            result = Number(leftnum) % Number(rightnum);
        }

    }

    numbers.splice(index, 2, result);
    foundoperators.splice(index, 1);

}




while (foundoperators.includes("+") || foundoperators.includes("-")) {


    let index = foundoperators.findIndex(operator => operator === "+" || operator === "-")
    let operator = foundoperators[index];

    if (operator === "+") {

        leftnum = numbers[index];
        rightnum = numbers[index + 1];
        result = Number(leftnum) + Number(rightnum);
    } else {
        leftnum = numbers[index];
        rightnum = numbers[index + 1];
        result = Number(leftnum) - Number(rightnum);
    }


    numbers.splice(index, 2, result);
    foundoperators.splice(index, 1);

}

