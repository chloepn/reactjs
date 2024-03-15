export default function Message(){
    function handleclick(){
        console.log("button click");
    }
    return(
            <button onClick ={handleclick}> click here </button>
    );
}