import React from "react";

import desertImg from "./assets/desert-dunes.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import savannaImg from "./assets/african-savanna.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";

import Place from "./components/Place.jsx";
import Accordion from "./components/accordion/Accordion.jsx";
import AccordionBody from "./components/accordion/AccordionBody.jsx";
import AccordionTitle from "./components/accordion/AccordionTitle.jsx";
import SearchableList from "./components/searchablelist/SearchableList.jsx";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

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
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["item 1", "item 2"]} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}
