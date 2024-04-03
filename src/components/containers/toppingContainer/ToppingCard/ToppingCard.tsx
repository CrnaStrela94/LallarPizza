import React from "react";
import { PlusBtn } from "../../../btn/PlusBtn";
import { useCart } from "../../../PizzaContext";
import { ExtraTopping } from "../../../types/OrderTypes";

type Props = {
  individualTopping: ExtraTopping;
  pizzaIndex: string;
};

const ToppingCard: React.FC<Props> = ({ individualTopping, pizzaIndex }) => {
  const { shoppingCart, addNewToppingToCart } = useCart();

  const handleAddToCart = () => {
    const updatedCart = shoppingCart.map((order) => {
      if (order.id === pizzaIndex && !('drink' in order)) {
        const updatedToppings = [...order.extraToppings, individualTopping];
        return { ...order, extraToppings: updatedToppings };
      }
      return order;
    });
    addNewToppingToCart(updatedCart);
  };

  return (
    <div className="cardContainer">
      <div className="textContainer">
        <h3>{individualTopping.name}</h3>
      </div>
      <div className="priceCont-2">
        <PlusBtn onClick={handleAddToCart} />
        <p>{individualTopping.price}kr</p>
      </div>
    </div>
  );
};

export default ToppingCard;
