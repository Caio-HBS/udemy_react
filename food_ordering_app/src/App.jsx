import React from "react";

import Meals from "./components/Meals";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}
