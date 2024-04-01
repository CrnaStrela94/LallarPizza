import React from 'react';
import "./toppingContainer.scss";
import toppings from "../../json/ExtraTopping.json";
import { PlusBtn } from '../../btn/PlusBtn';
import { useCart } from '../../PizzaContext';
import { CartProvider } from '../../PizzaContext';
const toppingList = toppings.toppings


const ToppingContainer = () => {
    const {shoppingCart, plusToCart} = useCart();

    const handleClick = ()=>{
        console.log(shoppingCart)
       
    }
   console.log("test")
  return (
   <>
   <div className="container">
   {toppingList.map((topping, index) => (
     <div key={index}>
        <h3>{topping.name}</h3>
       <p>{topping.price}</p> 
       <div>
        <PlusBtn onClick={handleClick}/>
       </div>
     </div>
   ))}
  </div>
   </>
  );
}

export default ToppingContainer;
