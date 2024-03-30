import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./PizzaCard.scss";
import pizzaImg from "../../../../assets/pizza.png";
import { PlusBtn } from "../../../btn/PlusBtn";
import { OrderPizzaType, Pizza } from "../../../types/OrderTypes";
import { useCart } from "../../../PizzaContext";

type Props = {
  individualPizza: Pizza;
};
const PizzaCard: React.FC<Props> = ({ individualPizza }) => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    const order: OrderPizzaType = {
      pizza: individualPizza,
      extraToppings: [],
      drinks: [],
      id: uuidv4(),
    };
    addToCart(order);
  };

  return (
    <>
      <div className="cardContainer">
        <img src={pizzaImg} alt="Pizza Image" className="pizzaImg"></img>
        <div className="textContainer">
          <h3>{individualPizza.name}</h3>
          <p>{individualPizza.toppings.join(", ")}</p>
        </div>
        <div className="priceCont">
          <PlusBtn onClick={handleAddToCart} />
          <p>{individualPizza.price}kr</p>
        </div>
      </div>
    </>
  );
};

export default PizzaCard;
