import React from "react";

import { useAccordionContext } from "./Accordion.jsx";

export default function AccordionItem({ children, title, className, id }) {
  const { openItemId, toggleItem } = useAccordionContext();

  const isoOpen = openItemId === id;

  return (
    <li className={className}>
      <h3 onClick={() => toggleItem(id)}>{title}</h3>
      <div
        className={
          isoOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div>
    </li>
  );
}
