import React from "react";

import { useAccordionContext } from "./Accordion.jsx";

export default function AccordionTitle({ children, id, className }) {
  const { toggleItem } = useAccordionContext();

  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}
