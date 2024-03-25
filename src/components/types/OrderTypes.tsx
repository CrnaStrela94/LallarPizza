type PizzaOrder = {
    orderPizzaType: OrderPizzaType;
};

type OrderPizzaType = {
    pizza: Pizza;
    extraToppings: ExtraTopping[];
    drinks: Drink[];
};

type Pizza = {
    name: string;
    toppings: string[];
    price: number;
};

type ExtraTopping = {
    name: string;
    price: number;
    amount: number;
};

type Drink = {
    name: string;
    price: number;
    amount: number;
};

// Example with multiple pizzas, each with extra toppings and a drink
// const orders: PizzaOrder[] = [
//     {
//         orderPizzaType: {
//             pizza: {
//                 name: "Pepperoni",
//                 toppings: ["Mushrooms", "Olives"],
//                 price: 99,
//             },
//             extraToppings: [
//                 {
//                     name: "Extra cheese",
//                     price: 10,
//                     amount: 1,
//                 },
//             ],
//             drinks: [
//                 {
//                     name: "Sprite",
//                     price: 25,
//                     amount: 1,
//                 },
//             ],
//         },
//     },
//     {
//         orderPizzaType: {
//             pizza: {
//                 name: "Margherita",
//                 toppings: ["Basil", "Tomato"],
//                 price: 89,
//             },
//             extraToppings: [
//                 {
//                     name: "Garlic",
//                     price: 5,
//                     amount: 1,
//                 },
//             ],
//             drinks: [
//                 {
//                     name: "Coca-Cola",
//                     price: 25,
//                     amount: 1,
//                 },
//             ],
//         },
//     },
// ];