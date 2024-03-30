// Cart.tsx
import React from 'react';
import { OrderPizzaType } from "../../types/OrderTypes";
import MinusBtn from '../../btn/MinusBtn';
import './__Cart.scss';

type Props = {
    cart: OrderPizzaType[];
    removeFromCart: (id: string) => void;
};

const Cart: React.FC<Props> = ({ cart, removeFromCart }) => {
    return (
        <div className="cartContainer">
            {cart.map((order, index) => (
                <div key={index} className="cartItem">
                    <div>
                        <h3> {order.pizza.name}</h3>
                        <p>Toppings: {order.pizza.toppings.join(', ')}</p>
                        <p>Price: {order.pizza.price}</p>
                        <MinusBtn onClick={() => removeFromCart(order.id)} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;