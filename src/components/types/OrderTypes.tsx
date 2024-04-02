export type PizzaOrder = {
  orderPizzaType: OrderPizzaType;
};

export type OrderPizzaType = {
  pizza: Pizza;
  extraToppings: ExtraTopping[];
  drinks: Drink[];
  id: string;
};

export type Pizza = {
  name: string;
  toppings: string[];
  price: number;
};

export type ExtraTopping = {
  name: string;
  price: number;
  amount: number;
};

export type Drink = {
  name: string;
  price: number;
  amount: number;
};
export type Drinks = {
  name: string;
  price: number;
};