import React from "react";
import "../pizzaCard/PizzaCard.scss";
import spriteImg from "../../../../assets/sprite.png";
import { PlusBtn } from "../../../btn/PlusBtn";
import { Drink, OrderPizzaType } from "../../../types/OrderTypes";
import { useCart } from "../../../PizzaContext";
import { v4 as uuidv4 } from "uuid";

type Props = {
  individualDrink: Drink;
};

const DrinkCard: React.FC<Props> = ({ individualDrink }) => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    const order: OrderPizzaType = {
      pizza: { name: "", toppings: [], price: 0 },
      extraToppings: [],
      drinks: [individualDrink],
      id: uuidv4(),
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
