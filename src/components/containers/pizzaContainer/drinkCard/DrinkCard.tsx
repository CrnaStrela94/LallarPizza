import React from "react";
import "../pizzaCard/PizzaCard.scss";
import spriteImg from "../../../../assets/sprite.png";
import { PlusBtn } from "../../../btn/PlusBtn";
import { Drinks } from "../../../types/OrderTypes";
const DrinkCard = ({ individualDrink }: { individualDrink: Drinks }) => {
  return (
    <>
      <div className="cardContainer">
        <img src={spriteImg} alt="Sprite Image" className="pizzaImg"></img>
        <div className="textContainer">
          <h3>{individualDrink.name}</h3>
          <p>330ml can</p>
        </div>
        <div className="priceCont">
          <PlusBtn />
          <p>{individualDrink.price}kr</p>
        </div>
      </div>
    </>
  );
};

export default DrinkCard;
