import React from "react";

import Accordion from "./components/accordion/Accordion.jsx";

export default function App() {
  return (
    <main>
      <section>
        <h2>Why choose us?</h2>
        <Accordion className="accordion">
          <Accordion.Item
            id="experience"
            className="accordion-item"
            title="20 years of experience"
          >
            <article>
              <p>Join thousands of satisfied clients.</p>
              <p>You can&apos;t go wrong with us.</p>
            </article>
          </Accordion.Item>
          <Accordion.Item
            id="local-guides"
            className="accordion-item"
            title="Local guides"
          >
            <article>
              <p>
                We employ dozens of local guides to provide the best experiences
                to our clients.
              </p>
              <p>
                Nothing but experts to provide the best and most accurate
                information, not to mention provide safety to our clients.
              </p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}
