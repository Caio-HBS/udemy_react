import React from "react";

import Header from "./components/Header/Header";
import Examples from "./components/Examples";
import CoreConcepts from "./components/CoreConcepts";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}
