import React from "react";
import { ExtraTopping } from "../../types/OrderTypes";
import MinusBtn from "../../btn/MinusBtn";
import "./__Cart.scss";
import { useCart } from "../../PizzaContext";
import pizzaImg from "../../../assets/pizza.png"
import spriteImg from "../../../assets/sprite.png"
import fantaImg from "../../../assets/fanta.png"
import colaImg from "../../../assets/cola.png"
import OrderBtn from "../../btn/OrderBtn";



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
                            <div className="orderContainer">
                                <img src={pizzaImg} alt="Pizza Image" className="pizzaImg"></img>
                                <div className="pizzaText">
                                    <h3>{order.pizza.name}</h3>
                                        <p> {order.pizza.toppings.join(", ")}</p>
                                    <p> {order.pizza.price} SEK</p>
                                </div>
                                <div className="removePizzaBtn">
                                    <MinusBtn onClick={() => removeFromCart(order.id)} />
                                </div>
                            </div>
                        )}
                        {order.drinks.length > 0 && (
                            <div className="drinkContainer">
                               
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
                                }
                                
                                )}
                                 <p>
                                     {order.drinks.map((drink) => drink.name).join(", ")}
                                </p>
                                <p>
                                    {order.drinks.map((drink) => drink.price).join(", ")}{" "}
                                    SEK
                                </p>
                                
                                <div className="removeDrinkBtn">
                                <MinusBtn onClick={() => removeFromCart(order.id)} />
                                </div>
                                </div>
                        )}
                        {order.extraToppings.length > 0 && (
                            <>
                                {order.extraToppings.map((topping) => (
                                    <div className="toppingItemContainer" key={topping.name}>
                                        <p>
                                            {topping.name} - {topping.price} SEK
                                        </p>
                                        
                                        <div className="removeToppingBtn">
                                            <MinusBtn onClick={() => handleRemoveTopping(order.id, topping)} />
                                        </div>
                                    </div>
                                )
                                
                                )}
                            </>
                        )}
                    </div>
                </div>
            ))}
            <p className="totalPrice">Total Order Price: {totalOrderPrice} SEK</p>
            <OrderBtn />
        </div>
    );
};

export default Cart;

