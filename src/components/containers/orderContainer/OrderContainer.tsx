import React from "react";
import Cart from "../orderContainer/Cart";
import { useCart } from "../../PizzaContext"; // import useCart

const OrderContainer: React.FC = () => {
    const { shoppingCart, removeFromCart } = useCart(); // use useCart

    return (
        <>
            <Cart cart={shoppingCart} removeFromCart={removeFromCart} />
        </>
    );
};

export default OrderContainer;