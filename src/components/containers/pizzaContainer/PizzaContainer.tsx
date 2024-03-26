import React from "react";
import "./PizzaContainer.scss";
import PizzaCard from "./pizzaCard/PizzaCard";
import pizzaList from "../../json/Pizza.json";
import * as pizzaTypes from "../../types/OrderTypes";
import drinksList from "../../json/Drinks.json";
import DrinkCard from "./drinkCard/DrinkCard";

type Props = {
  addToCart: (order: pizzaTypes.OrderPizzaType) => void;
};
const PizzaContainer: React.FC<Props> = ({ addToCart }) => {
  const pizzaArray: pizzaTypes.Pizza[] = pizzaList;
  const drinksArray: pizzaTypes.Drink[] = drinksList.drinks;
  return (
    <div className="pizzaCont">
      <h2 id="titleText">PIZZA & DRINK</h2>
      {pizzaArray.map((pizza, index) => (
        <PizzaCard
          individualPizza={pizza}
          addToCart={(order: pizzaTypes.OrderPizzaType) => addToCart(order)}
        />
      ))}
      <span className="divider"></span>
      {drinksArray.map((drink, index) => (
        <DrinkCard
          individualDrink={drink}
          addToCart={(order: pizzaTypes.OrderPizzaType) => addToCart(order)}
        />
      ))}
    </div>
  );
};

export default PizzaContainer;
