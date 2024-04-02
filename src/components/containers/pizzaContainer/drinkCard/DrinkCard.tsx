import React from "react";
import "../pizzaCard/PizzaCard.scss";
import { PlusBtn } from "../../../btn/PlusBtn";
import { Drink, OrderPizzaType } from "../../../types/OrderTypes";
import { useCart } from "../../../PizzaContext";
import { v4 as uuidv4 } from "uuid";
import spriteImg from "../../../../assets/sprite.png";
import fantaImg from "../../../../assets/fanta.png";
import colaImg from "../../../../assets/cola.png";

type Props = {
  individualDrink: Drink
};

const DrinkCard: React.FC<Props> = ({ individualDrink }) => {
  let canImg = ''
  if(individualDrink.name==='Coca-Cola'){
    canImg=colaImg
  } else if (individualDrink.name==="Sprite"){
canImg=spriteImg
  } else if (individualDrink.name=== "Fanta"){
    canImg=fantaImg
  }
    
  
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
        <img src={canImg} alt="Can Image" className="pizzaImg"></img>
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
