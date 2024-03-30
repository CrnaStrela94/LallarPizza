// CartContext.tsx
import React, { ReactNode, createContext, useContext, useState } from "react";
import { ExtraTopping, OrderPizzaType } from "./types/OrderTypes";

type CartContextType = {
  shoppingCart: OrderPizzaType[];
  addToCart: (order: OrderPizzaType) => void;
  removeFromCart: (id: string) => void; // Add this line
  updateExtraToppings: (orderId: string, newToppings: ExtraTopping[]) => void;
  addNewToppingToCart: (order: OrderPizzaType[]) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState<OrderPizzaType[]>([]);

  const updateExtraToppings = (
    orderId: string,
    newToppings: ExtraTopping[]
  ) => {
    setShoppingCart((prevCart) =>
      prevCart.map((order) => {
        if (order.id === orderId) {
          return { ...order, extraToppings: newToppings };
        }
        return order;
      })
    );
  };
  const addNewToppingToCart = (order: OrderPizzaType[]) => {
    setShoppingCart(order);
  };
  const removeFromCart = (id: string) => {
    setShoppingCart((prevCart) => prevCart.filter((order) => order.id !== id));
  };

  console.log(shoppingCart);
  const addToCart = (order: OrderPizzaType) => {
    setShoppingCart([...shoppingCart, order]);
  };
  console.log(shoppingCart);

  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        addToCart,
        removeFromCart, // Add this line
        updateExtraToppings,
        addNewToppingToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
