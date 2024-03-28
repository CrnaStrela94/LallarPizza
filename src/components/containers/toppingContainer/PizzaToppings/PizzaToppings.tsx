// PizzaToppings.tsx
import ToppingCard from "../ToppingCard/ToppingCard";
import toppingList from "../../../json/ExtraTopping.json";

const PizzaToppings = ({ order, pizzaIndex }: any) => {
  const toppingArray = toppingList.toppings;

  return (
    <div>
      <h3>{order.pizza.name}</h3>
      <p>Toppings:</p>
      {toppingArray.map((topping, index) => (
        <ToppingCard
          key={index}
          individualTopping={topping}
          pizzaIndex={pizzaIndex}
        />
      ))}
    </div>
  );
};

export default PizzaToppings;
