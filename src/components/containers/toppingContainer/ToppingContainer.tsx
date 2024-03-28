import { useCart } from "../../PizzaContext";
import PizzaToppings from "./PizzaToppings/PizzaToppings";

const ToppingContainer = () => {
  const { shoppingCart } = useCart();

  return (
    <div>
      <h2 id="titleText">TOPPINGS</h2>
      {shoppingCart.map((order, index) => (
        <PizzaToppings key={index} order={order} pizzaIndex={order.id} />
      ))}
    </div>
  );
};

export default ToppingContainer;
