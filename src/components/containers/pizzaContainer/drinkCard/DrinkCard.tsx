import React from "react";
import "../pizzaCard/PizzaCard.scss";
import spriteImg from "../../../../assets/sprite.png";
import { PlusBtn } from "../../../btn/PlusBtn";
import { Drink, OrderPizzaType } from "../../../types/OrderTypes";

type Props = {
  individualDrink: Drink;
  addToCart: (order: OrderPizzaType) => void;
};
const DrinkCard: React.FC<Props> = ({ addToCart, individualDrink }) => {
  const handleAddToCart = () => {
    const order: OrderPizzaType = {
      pizza: { name: "", toppings: [], price: 0 },
      extraToppings: [],
      drinks: [individualDrink],
    };
    addToCart(order);
  };
  return (
    <>
      <div className="cardContainer">
        <img src={spriteImg} alt="Sprite Image" className="pizzaImg"></img>
        <div className="textContainer">
          <h3>{individualDrink.name}</h3>
          <p>330ml can</p>
        </div>
        <div className="priceCont">
          <PlusBtn onClick={handleAddToCart} />
          <p>{individualDrink.price}kr</p>
        </div>
      </div>
    </>
  );
};

export default DrinkCard;
