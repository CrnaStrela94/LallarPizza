import OrderContainer from "./components/containers/orderContainer/OrderContainer";
import PizzaContainer from "./components/containers/pizzaContainer/PizzaContainer";
import ToppingContainer from "./components/containers/toppingContainer/ToppingContainer";
export function App() {
  return (
    <div>
      <PizzaContainer />
      <OrderContainer />
      <ToppingContainer />
    </div>
  );
}
