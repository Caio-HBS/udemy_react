import React from "react";

import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

import Cart from "./components/Cart";
import Meals from "./components/Meals";
import Header from "./components/Header";

export default function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Cart />
        <main>
          <Meals />
        </main>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}
