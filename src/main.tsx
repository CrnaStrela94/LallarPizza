import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./components/scss/index.scss";
import { CartProvider } from "./components/PizzaContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
