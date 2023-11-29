import { useState } from "react";
import { Button } from "../button/Button";

// let counter = 10;

function CounterApp() {
    /* const [render, setRender] = useState(1);
    console.log(`N. de renderización ${render}`); */
    //Hook UseState
    const [counter, setCounter] = useState(0);
    

    const HandleIncrement = () => {
        /* console.log("Has pulsado el boton de incrementar"); */
        setCounter(counter+1)
        /* setRender(render+1) */
        /* console.log(counter); */
    }

    const HandleDecrement = () => {
        setCounter(counter-1)
    }

    const myCounter = (
        <div className="counter-container">
            <h1 className="counter">{counter}</h1>
            <div className="Buttons">
                <Button onClick={HandleIncrement}>Add</Button>
                <Button onClick={HandleDecrement}>Less</Button>
                {/* <button onClick={HandleIncrement} type="button">Suma</button> */}
                {/* <button onClick={HandleDecrement} type="button">Resta</button> */}
                <button onClick={() => setCounter(0)} type="button">Reset</button>
            </div>
        </div>

    );

    return myCounter;
}
//Exportacion por default es una forma de exportar
//una unica entidad desde un modulo
export default CounterApp;