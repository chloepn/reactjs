// export default function EachFruit({name, price}){
//         if(price >5){
//             return(<div> {name} is cheaper than $5, price is {price}</div>);
//         }else{
//             return(<div> {name} is more than $5, price is {price}</div>);
//         }
// }


export default function EachFruit({name, price}){
        return(
            price >5 ? <div> {name} is cheaper than $5, price is {price}</div>:<div> {name} is more than $5, price is {price}</div>
        );
}