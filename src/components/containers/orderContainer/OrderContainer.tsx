import React, { useReducer, useRef } from "react";
import PizzaContainer from "../pizzaContainer/PizzaContainer";
import Cart from "../orderContainer/Cart";
import { OrderPizzaType } from "../../types/OrderTypes";

type Props = {
    shoppingCart: OrderPizzaType[];
};

type Action =
    | { type: 'ADD', order: OrderPizzaType, id: number }
    | { type: 'REMOVE', id: number };

function reducer(state: OrderPizzaType[], action: Action) {
    switch (action.type) {
        case 'ADD':
            return [...state, { ...action.order, id: action.id }];
        case 'REMOVE':
            return state.filter(order => order.id !== action.id);
        default:
            throw new Error();
    }
}

export const OrderContainer: React.FC<Props> = ({ shoppingCart }) => {
    const [cart, dispatch] = useReducer(reducer, shoppingCart);
    const nextId = useRef(0);

    const addToCart = (order: OrderPizzaType) => {
        dispatch({ type: 'ADD', order, id: nextId.current++ });
    };

    const removeFromCart = (order: OrderPizzaType) => {
        dispatch({ type: 'REMOVE', id: order.id });
    };

    return (
        <>
            <PizzaContainer addToCart={addToCart} />
            <Cart cart={cart} removeFromCart={removeFromCart} />
        </>
    );
};