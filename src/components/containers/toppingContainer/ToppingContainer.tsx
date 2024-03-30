import { useCart } from "../../PizzaContext";
import PizzaToppings from "./PizzaToppings/PizzaToppings";
import "./Toppings.scss";

const ToppingContainer = () => {
  const { shoppingCart } = useCart();

  return (
    <div className="toppingContainer">
      <h2 id="titleText">TOPPINGS</h2>
      {shoppingCart.map((order, index) => (
        <PizzaToppings key={index} order={order} pizzaIndex={order.id} />
      ))}
    </div>
  );
};

export default ToppingContainer;
