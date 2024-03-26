import React, { useState } from 'react';
import PizzaContainer from '../pizzaContainer/PizzaContainer';
import ToppingsContainer from '../toppingsContainer/ToppingsContainer';
import pizzas from '../../json/Pizza.json';
import toppings from '../../json/ExtraTopping.json';
import drinks from '../../json/Drinks.json';
import './orderContainer.scss';
import { PizzaOrder } from '../../types/OrderTypes';

export const OrderContainer: React.FC = () => {
    const [selectedPizzas, setSelectedPizzas] = useState<PizzaOrder[]>([]);
    const [selectedToppings, setSelectedToppings] = useState<PizzaOrder[]>([]);

    const handlePizzaSelection = (pizza: PizzaOrder) => {
        setSelectedPizzas((prevSelectedPizzas) => [...prevSelectedPizzas, pizza]);
    };
    const handleDrinksSelection = (drink: PizzaOrder) => {
        setSelectedPizzas((prevSelectedDrinks) => [...prevSelectedDrinks, drink]);
    }

    const handleToppingSelection = (topping: PizzaOrder) => {
        setSelectedToppings((prevSelectedToppings) => [...prevSelectedToppings, topping]);
    };

    const calculateTotalPrice = () => {
        // Calculate the total price based on the selected pizzas and toppings
        // You can use the prices from the JSON files to calculate the price of each item
        // and then sum them up to get the final price
    };

    return (
        <div>
            <h2>Order Container</h2>
            <PizzaContainer
                pizzas={pizzas}
                drinks={drinks}
                onPizzaSelect={(selectedPizza: PizzaOrder, selectedDrink: PizzaOrder) => {
                    handlePizzaSelection(selectedPizza);
                    handleDrinksSelection(selectedDrink);
                }}
            />
            <ToppingsContainer toppings={toppings} onToppingSelect={handleToppingSelection} />

            <button onClick={calculateTotalPrice}>Calculate Price</button>
            {/* Display the selected pizzas and toppings here */}
            {/* Display the final price here */}
        </div>
    );
};
