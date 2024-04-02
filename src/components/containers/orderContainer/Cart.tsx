import React from "react";
import { ExtraTopping } from "../../types/OrderTypes";
import MinusBtn from "../../btn/MinusBtn";
import "./__Cart.scss";
import { useCart } from "../../PizzaContext";
import pizzaImg from "../../../assets/pizza.png"
import spriteImg from "../../../assets/sprite.png"
import fantaImg from "../../../assets/fanta.png"
import colaImg from "../../../assets/cola.png"


const Cart: React.FC = () => {
    const { removeToppingFromCart, shoppingCart, removeFromCart } = useCart();

    const handleRemoveTopping = (pizzaId: string, topping: ExtraTopping) => {
        removeToppingFromCart(pizzaId, topping);
    };

    const totalOrderPrice = shoppingCart.reduce((total, order) => {
        let orderTotal = 0;
        if (order.pizza) {
            orderTotal += order.pizza.price;
        }
        if (order.drinks) {
            orderTotal += order.drinks.reduce(
                (total, drink) => total + drink.price,
                0
            );
        }
        if (order.extraToppings) {
            orderTotal += order.extraToppings.reduce(
                (total, topping) => total + topping.price,
                0
            );
        }
        return total + orderTotal;
    }, 0);

    return (
        <div className="cartContainer">
            {shoppingCart.map((order, index) => (
                <div key={index} className="cartItem">
                    <div>
                        {order.pizza.name && (
                            <>
                                <img src={pizzaImg} alt="Pizza Image" className="pizzaImg"></img>
                                <h3>{order.pizza.name}</h3>
                                <p>Toppings: {order.pizza.toppings.join(", ")}</p>
                                <p>Price: {order.pizza.price} SEK</p>
                            </>
                        )}
                        {order.drinks.length > 0 && (
                            <>
                                <p>
                                    Drinks: {order.drinks.map((drink) => drink.name).join(", ")}
                                </p>
                                <p>
                                    Price: {order.drinks.map((drink) => drink.price).join(", ")}{" "}
                                    SEK
                                </p>
                                {order.drinks.map(drink => {
                                    if (drink.name === 'Coca-Cola') {
                                        return <img src={colaImg} alt="Coca-Cola Image" className="drinkImg"></img>;
                                    }
                                    else if (drink.name === 'Sprite') {
                                        return <img src={spriteImg} alt="Sprite Image" className="drinkImg"></img>;
                                    }
                                    else if (drink.name === 'Fanta') {
                                        return <img src={fantaImg} alt="Fanta Image" className="drinkImg"></img>;
                                    }
                                })}
                            </>
                        )}
                        {order.extraToppings.length > 0 && (
                            <>
                                <p>
                                    Extra Toppings:{" "}
                                    {order.extraToppings
                                        .map((topping) => topping.name)
                                        .join(", ")}
                                </p>
                                {order.extraToppings.map((topping) => (
                                    <div key={topping.name}>
                                        <p>
                                            {topping.name} - {topping.price} SEK
                                        </p>
                                        <MinusBtn
                                            onClick={() => handleRemoveTopping(order.id, topping)}
                                        />
                                        <span>remove extra item</span>
                                    </div>
                                ))}
                            </>
                        )}
                        <MinusBtn onClick={() => removeFromCart(order.id)} />
                        <span>Abort Order</span>
                    </div>
                </div>
            ))}
            <p className="totalPrice">Total Order Price: {totalOrderPrice} SEK</p>
        </div>
    );
};

export default Cart;

