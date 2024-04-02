import React from "react";
import Cart from "../orderContainer/Cart";
import { useCart } from "../../PizzaContext";
import OrderBtn from "../../btn/OrderBtn";

const OrderContainer: React.FC = () => {
    const { shoppingCart, removeFromCart } = useCart();

    return (
        <>
            <Cart cart={shoppingCart} removeFromCart={removeFromCart} />
            
        </>
    );
};

export default OrderContainer;