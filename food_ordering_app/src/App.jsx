import React from "react";

import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

import Cart from "./components/Cart";
import Meals from "./components/Meals";
import Header from "./components/Header";
import Checkout from "./components/Checkout";

export default function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Cart />
        <Checkout />
        <main>
          <Meals />
        </main>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}
