import { useState } from "react";
import "../styles/calculator.css"


function Calculator() {

    const [input, setInput] = useState("")

    function handleInput(event) {

        const value = event.target.value;

        setInput(prevInput => prevInput + value)
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
                        <button onClick={() => setInput(eval(input))} value={'='}>=</button>
                    </div>
                </div>

            </div >

        </>
    )
}

export default Calculator;