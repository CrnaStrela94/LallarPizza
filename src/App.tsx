import { useEffect, useState } from "react";
import PizzaContainer from "./components/containers/pizzaContainer/PizzaContainer";
import { OrderPizzaType } from "./components/types/OrderTypes";
import Header from "./components/Header/Header";
export function App() {
  const [shoppingCart, setShoppingCart] = useState<OrderPizzaType[]>([]);

  const addToCart = (order: OrderPizzaType) => {
    setShoppingCart([...shoppingCart, order]);
  };

  useEffect(() => {
    console.log(shoppingCart); // Log the updated shopping cart state after each render
  }, [shoppingCart]); // Trigger useEffect only when shoppingCart state changes

  return (
    <div>
      <Header/>
      <PizzaContainer addToCart={addToCart} />
    </div>
  );
}
