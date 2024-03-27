import React from "react";
import "./PizzaCard.scss";
import pizzaImg from "../../../../assets/pizza.png";
import { PlusBtn } from "../../../btn/PlusBtn";
import { OrderPizzaType, Pizza } from "../../../types/OrderTypes";

type Props = {
  individualPizza: Pizza;
  addToCart: (order: OrderPizzaType) => void;
};

const PizzaCard: React.FC<Props> = ({ addToCart, individualPizza }) => {
  const handleAddToCart = () => {
    const order: OrderPizzaType = {
      pizza: individualPizza,
      extraToppings: [],
      drinks: [],
      id: 0,
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
