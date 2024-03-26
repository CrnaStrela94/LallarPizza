import Header from "./components/Header/Header";
import MinusBtn from "./components/btn/MinusBtn"
import OrderBtn from "./components/btn/OrderBtn"
import { PlusBtn } from "./components/btn/PlusBtn"
export function App() {
  return (
    <>
    <div>App</div>
    <Header/>
    <OrderBtn></OrderBtn>
    <PlusBtn/>
    <MinusBtn/>
    </>
  )
}