import React from "react";
import "./PizzaCard.scss";
import pizzaImg from "../../../../assets/pizza.png";
import { PlusBtn } from "../../../btn/PlusBtn";
import { Pizza } from "../../../types/OrderTypes";

const PizzaCard = ({ individualPizza }: { individualPizza: Pizza }) => {
  return (
    <>
      <div className="cardContainer">
        <img src={pizzaImg} alt="Pizza Image" className="pizzaImg"></img>
        <div className="textContainer">
          <h3>{individualPizza.name}</h3>
          <p>{individualPizza.toppings.join(", ")}</p>
        </div>
        <div className="priceCont">
          <PlusBtn />
          <p>{individualPizza.price}kr</p>
        </div>
      </div>
    </>
  );
};

export default PizzaCard;
