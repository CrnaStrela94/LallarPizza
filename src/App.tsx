import { useState } from "react";
import { OrderPizzaType } from "./components/types/OrderTypes";
import { OrderContainer } from "./components/containers/orderContainer/OrderContainer";
export function App() {
  const [shoppingCart,] = useState<OrderPizzaType[]>([]);


  return (
    <div>
      <OrderContainer shoppingCart={shoppingCart} />
    </div>
  );
}
