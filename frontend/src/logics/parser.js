const input = "10+5*2";
const operators = "+-*/%";
let numbers = [];
let currentNum = "";
let foundoperators = [];


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

            if (/[0-9]/.test(input[i + 1])) {
                currentNum += "-";
                i++;


                while (/[0-9]/.test(input[i])) {
                    currentNum += input[i];
                    i++;
                }
                i--;

                numbers.push(currentNum);
                currentNum = "";
            }
        } else {

            foundoperators.push(input[i]);

        }
    } else if (operators.includes(input[i])) {
        foundoperators.push(input[i]);

    } else if (/[0-9]/.test(input[i])) {

        while (/[0-9]/.test(input[i])) {
            currentNum += input[i];
            i++;
        }
        i--;
        numbers.push(currentNum);
        currentNum = "";
    }



}

console.log(numbers)
console.log(foundoperators)


let index = foundoperators.indexOf("*");
let leftnum = numbers[index];
let rightnum = numbers[index + 1];

let result = leftnum * rightnum;
console.log(result);








