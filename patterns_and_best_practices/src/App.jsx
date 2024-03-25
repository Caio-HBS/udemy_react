import React from "react";

import Accordion from "./components/accordion/Accordion.jsx";
import AccordionBody from "./components/accordion/AccordionBody.jsx";
import AccordionTitle from "./components/accordion/AccordionTitle.jsx";

export default function App() {
  return (
    <main>
      <section>
        <h2>Why choose us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="experience" className="accordion-item">
            <Accordion.Title className="accordion-item-title">
              20 years of experience
            </Accordion.Title>
            <AccordionBody className="accordion-item-content">
              <article>
                <p>Join thousands of satisfied clients.</p>
                <p>You can&apos;t go wrong with us.</p>
              </article>
            </AccordionBody>
          </Accordion.Item>
          <Accordion.Item id="local-guides" className="accordion-item">
            <AccordionTitle className="accordion-item-title">
              Local guides
            </AccordionTitle>
            <AccordionBody className="accordion-item-content">
              <article>
                <p>
                  We employ dozens of local guides to provide the best
                  experiences to our clients.
                </p>
                <p>
                  Nothing but experts to provide the best and most accurate
                  information, not to mention provide safety to our clients.
                </p>
              </article>
            </AccordionBody>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}
