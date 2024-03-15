import EachFruit from "./EachFruit.jsx"
export default function Fruits(){
    const fruit = [
    {name :"apple" ,price: 10},
    {name :"pineapple" , price: 2}
    ];
    return(
        <h1>
            {fruit.map(value => <EachFruit name = {value.name}  price = {value.price}/>)}
        </h1>
    );
}