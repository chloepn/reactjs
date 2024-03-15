import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    function increase(){
        setCount(count+1);
    }
    function decrease(){
        setCount(count-1);
    }
    return(
        <div>
            <button onClick ={increase} > increase count</button>
            <button onClick ={decrease} > increase count</button>
            <h1>count value is {count} </h1>
        </div>
    );
}