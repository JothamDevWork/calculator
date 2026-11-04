import { useState } from "react";
import calculate from "../logics/calculate.js";
import "../styles/calculator.css"


function Calculator() {

    const [input, setInput] = useState("")

    function handleInput(event) {

        const value = event.target.value;

        setInput(prevInput => prevInput + value)


    }

    function handleBackspace(input) {

        input = String(input);
        input = input.slice(0, -1);
        return String(input);
    }



    function handleCalculate(input) {

        let numbers = input.split(/[+*-/%]/);
        let operators = input.match(/[+*-/%]/g);
        let result = Number(numbers[0]);

        for (let i = 0; i < numbers.length - 1; i++) {
            result = calculate(result, operators[i], Number(numbers[i + 1]))

        }

        return result;
        /* let operation = "";
         let operationIndex = -1;
         const operators = ['+', '-', '*', '/', '%']
 
         for (const operator of operators) {
             let index = input.indexOf(operator);
 
             if (index !== -1) {
                 operation = operator;
                 operationIndex = index;
                 break;
             }
         }
 
         const num1 = Number(input.slice(0, operationIndex));
         const num2 = Number(input.slice(operationIndex + 1));
 
         return calculate(num1, operation, num2) */
    }

    return (
        <>

            <div className="calculator-container">

                <div className="calculator">
                    <input className="screen" type="text" value={input} disabled></input>


                    <div className="btn-containers">
                        <button onClick={handleInput} value={1}>1</button>
                        <button onClick={handleInput} value={2}>2</button>
                        <button onClick={handleInput} value={3}>3</button>
                        <button onClick={handleInput} value={4}>4</button>
                        <button onClick={handleInput} value={5}>5</button>
                        <button onClick={handleInput} value={6}>6</button>
                        <button onClick={handleInput} value={7}>7</button>
                        <button onClick={handleInput} value={8}>8</button>
                        <button onClick={handleInput} value={9}>9</button>
                        <button onClick={handleInput} value={0}>0</button>
                        <button onClick={handleInput} value={'.'}>.</button>
                        <button onClick={handleInput} value={'+'}>+</button>
                        <button onClick={handleInput} value={'-'}>-</button>
                        <button onClick={handleInput} value={'*'}>*</button>
                        <button onClick={handleInput} value={'/'}>/</button>
                        <button onClick={handleInput} value={'%'}>%</button>
                        <button onClick={() => setInput("")}>C</button>
                        <button onClick={() => setInput(handleBackspace(input))}>⌫</button>
                        <button onClick={() => setInput(handleCalculate(input))} value={'='}>=</button>
                    </div>
                </div>

            </div >

        </>
    )
}

export default Calculator;