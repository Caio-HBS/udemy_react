import React, { useState } from "react";

import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function selectHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => selectHandler("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => selectHandler("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => selectHandler("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => selectHandler("state")}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic && <p>Please select a Component.</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
