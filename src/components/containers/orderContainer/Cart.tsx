// Cart.tsx
import React from 'react';
import { OrderPizzaType } from "../../types/OrderTypes";
import MinusBtn from '../../btn/MinusBtn';
import './__Cart.scss';

type Props = {
    cart: OrderPizzaType[];
    removeFromCart: (order: OrderPizzaType) => void;
};

const Cart: React.FC<Props> = ({ cart, removeFromCart }) => {
    return (
        <div className="cartContainer">
            {cart.map((order, index) => (
                <div key={index} className="cartItem">
                    <h3>{order.pizza.name}</h3>
                    <p>{order.pizza.toppings.join(", ")}</p>
                    <p>{order.pizza.price}kr</p>
                    <MinusBtn onClick={() => removeFromCart(order)} />
                </div>
            ))}
        </div>
    );
};

export default Cart;