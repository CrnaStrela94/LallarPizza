// CartContext.tsx
import React, { ReactNode, createContext, useContext, useState } from "react";
import { OrderPizzaType } from "./types/OrderTypes";

type CartContextType = {
  shoppingCart: OrderPizzaType[];
  addToCart: (order: OrderPizzaType) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [shoppingCart, setShoppingCart] = useState<OrderPizzaType[]>([]);

  const addToCart = (order: OrderPizzaType) => {
    setShoppingCart([...shoppingCart, order]);
  };
  console.log(shoppingCart);

  return (
    <CartContext.Provider value={{ shoppingCart, addToCart }}>
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
