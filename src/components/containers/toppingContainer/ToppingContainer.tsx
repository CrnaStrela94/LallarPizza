import React from 'react';
import "./toppingContainer.scss";
import toppings from "../../json/ExtraTopping.json";
import { PlusBtn } from '../../btn/PlusBtn';
import { useCart } from '../../PizzaContext';
import { CartProvider } from '../../PizzaContext';
import PizzaCard from '../pizzaContainer/pizzaCard/PizzaCard';
import { ExtraTopping, OrderPizzaType } from '../../types/OrderTypes';
const toppingList = toppings.toppings

//Vi har vår topping, vi vill nu få in den på rätt pizza i vårt
//orderobjekt. vårt orderobjekt ser ut såhär: 
// const order: OrderPizzaType = {
//   pizza: individualPizza,
//   extraToppings: [],
//   drinks: [],
//   id: 0,
// };
const ToppingContainer = () => {
  const { shoppingCart, plusToCart } = useCart();

  const handleClick = (topping:ExtraTopping, cartItem:OrderPizzaType) =>  {
     const newShoppingCart: OrderPizzaType[] = shoppingCart.map((orderItem, index)=>{
      console.log(orderItem)
      if(orderItem.pizza === cartItem.pizza){
        const newOrder:OrderPizzaType = {
          pizza: orderItem.pizza,
          extraToppings: [...orderItem.extraToppings, topping],
          drinks: [],
          id: orderItem.id
        }
        return newOrder
      }else {
        return orderItem
      }
    }
   
    )
    plusToCart(newShoppingCart)



    

  }
 
  return (
    <>
      <div className="container">
        <h2>Extra toppings</h2>
        {shoppingCart.map((cartItem, cartIndex) => {
          if (cartItem.pizza.price!== 0){
          return (
            <div key={cartIndex}>
              <h2>{cartItem.pizza.name}</h2>
              {toppingList.map((topping, index) => (
                <div key={index}>
                  <h3>{topping.name}</h3>
                  <p>{topping.price}</p>
                  <div>
                    <PlusBtn onClick={() => handleClick(topping, cartItem)} /> {/* Log cartItem when PlusBtn is clicked */}
                  </div>
                </div>
              ))}
              
            </div>
          );
        }
        })}
      </div>
    </>
  );
};
export default ToppingContainer;
