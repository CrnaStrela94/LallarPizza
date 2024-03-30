import "./PizzaContainer.scss";
import PizzaCard from "./pizzaCard/PizzaCard";
import pizzaList from "../../json/Pizza.json";
import * as pizzaTypes from "../../types/OrderTypes";
import drinksList from "../../json/Drinks.json";
import DrinkCard from "./drinkCard/DrinkCard";

const PizzaContainer = () => {
  const pizzaArray: pizzaTypes.Pizza[] = pizzaList;
  const drinksArray: pizzaTypes.Drink[] = drinksList.drinks;
  return (
    <div className="pizzaCont">
      <h2 id="titleText">PIZZA & DRINK</h2>
      {pizzaArray.map((pizza) => (
        <PizzaCard individualPizza={pizza} />
      ))}
      <span className="divider"></span>
      {drinksArray.map((drink) => (
        <DrinkCard individualDrink={drink} />
      ))}
    </div>
  );
};

export default PizzaContainer;
