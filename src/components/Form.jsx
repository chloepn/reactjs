import { useState, useEffect } from "react";

export default function Form(){
    const [name, setName] = useState({firstName: " ", lastName: " "});
//     useEffect(() => {console.log(name);}, [name]);
    function handleSubmit(e){
        e.preventDefault();
    }
    return(
        <div>
            <h1>{name.firstName} {name.lastName} </h1>
            <form>
{/*                 <input onChange={(e) => setName(prevName=> ({ ...prevName, firstName: e.target.value}))} type="text" value={name.firstName }/> */}
                <input onChange={(e) => setName({...name, lastName: e.target.value})} type="text" value={name.lastName}/>
                <button onClick = {(e) => handleSubmit(e)}> Submit</button>
            </form>
        </div>
    );
}