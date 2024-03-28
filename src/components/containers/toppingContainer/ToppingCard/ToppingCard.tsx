import React from "react";
import { PlusBtn } from "../../../btn/PlusBtn";
import { useCart } from "../../../PizzaContext";
import { ExtraTopping } from "../../../types/OrderTypes";

type Props = {
  individualTopping: ExtraTopping;
  pizzaIndex: string; // Accepting pizzaIndex to identify which pizza to update
};

const ToppingCard: React.FC<Props> = ({ individualTopping, pizzaIndex }) => {
  const { shoppingCart, updateExtraToppings } = useCart();

  const handleAddToCart = () => {
    const pizza = shoppingCart.find((order) => order.id === pizzaIndex);

    if (pizza) {
      const updatedToppings = [...pizza.extraToppings, individualTopping];
      updateExtraToppings(pizzaIndex, updatedToppings);
    } else {
      console.error(
        `Pizza with id ${pizzaIndex} not found in the shopping cart.`
      );
      // Handle the missing pizza scenario
    }
  };

  return (
    <div className="cardContainer">
      <div className="textContainer">
        <h3>{individualTopping.name}</h3>
      </div>
      <div className="priceCont">
        <PlusBtn onClick={handleAddToCart} />
        <p>{individualTopping.price}kr</p>
      </div>
    </div>
  );
};

export default ToppingCard;
