import React from "react";

import { CartContextProvider } from "./store/CartContext";

import Meals from "./components/Meals";
import Header from "./components/Header";

export default function App() {
  return (
    <CartContextProvider>
      <Header />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}
