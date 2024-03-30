// Cart.tsx
import React from 'react';
import { OrderPizzaType, ExtraTopping } from "../../types/OrderTypes";
import MinusBtn from '../../btn/MinusBtn';
import './__Cart.scss';
import { useCart } from "../../PizzaContext";

type Props = {
    cart: OrderPizzaType[];
    removeFromCart: (id: string) => void;
};

const Cart: React.FC<Props> = ({ cart, removeFromCart }) => {
    const { removeToppingFromCart } = useCart();

    const handleRemoveTopping = (pizzaId: string, topping: ExtraTopping) => {
        removeToppingFromCart(pizzaId, topping);
    };

    return (
        <div className="cartContainer">
            {cart.map((order, index) => (
                <div key={index} className="cartItem">
                    <div>
                        {order.pizza.name && (
                            <>
                                <h3>{order.pizza.name}</h3>
                                <p>Toppings: {order.pizza.toppings.join(', ')}</p>
                                <p>Price: {order.pizza.price} SEK</p>
                            </>
                        )}
                        {order.drinks.length > 0 && (
                            <>
                                <p>Drinks: {order.drinks.map(drink => drink.name).join(', ')}</p>
                                <p>Price: {order.drinks.map(drink => drink.price).join(', ')} SEK</p>
                            </>
                        )}
                        {order.extraToppings.length > 0 && (
                            <>
                                <p>Extra Toppings: {order.extraToppings.map(topping => topping.name).join(', ')}</p>
                                {order.extraToppings.map(topping => (
                                    <div key={topping.name}>
                                        <p>{topping.name} - {topping.price} SEK</p>
                                        <MinusBtn onClick={() => handleRemoveTopping(order.id, topping)} />
                                    </div>
                                ))}
                            </>
                        )}
                        <MinusBtn onClick={() => removeFromCart(order.id)} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;