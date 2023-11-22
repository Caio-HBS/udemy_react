import React from "react";
import { Link } from "react-router-dom";

const EVENTS = [
  {
    id: 1,
    name: "Event 1",
  },
  {
    id: 2,
    name: "Event 2",
  },
  {
    id: 3,
    name: "Event 3",
  },
  {
    id: 4,
    name: "Event 4",
  },
  {
    id: 5,
    name: "Event 5",
  },
];

export default function EventsPage() {
  return (
    <ul>
      {EVENTS.map((singleEvent) => (
        <li key={singleEvent.id}>
          <Link to={`${singleEvent.id}`}>{singleEvent.name}</Link>
        </li>
      ))}
    </ul>
  );
}
