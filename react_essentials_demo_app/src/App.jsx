import React from "react";

import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";

import conceptImg from "./assets/components.png";

import { CORE_CONCEPTS } from "./data.js";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept concept={CORE_CONCEPTS[0]} />
            <CoreConcept concept={CORE_CONCEPTS[1]} />
            <CoreConcept concept={CORE_CONCEPTS[2]} />
            <CoreConcept concept={CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}
