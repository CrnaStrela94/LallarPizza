import Header from "./components/Header/Header";
import OrderContainer from "./components/containers/orderContainer/OrderContainer";
import PizzaContainer from "./components/containers/pizzaContainer/PizzaContainer";
import ToppingContainer from "./components/containers/toppingContainer/ToppingContainer";
import "../src/components/scss/index.scss"
export function App() {
  return (
    <>
      <div>
       
        <Header />
        <div className="main-container">
          <PizzaContainer />
          <ToppingContainer />
          <OrderContainer />
          </div>
       
      </div>
    </>
  );
}
