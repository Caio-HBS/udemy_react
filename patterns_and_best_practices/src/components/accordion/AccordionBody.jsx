import React from "react";

import { useAccordionContext } from "./Accordion.jsx";

export default function AccordionBody({ children, id, className }) {
  const { openItemId } = useAccordionContext();

  const isOpen = openItemId === id;

  return (
    <div
      className={
        isOpen ? `${className ?? ""} open` : `${className ?? ""} close`
      }
    >
      {children}
    </div>
  );
}
