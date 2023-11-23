import React from "react";
import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm.jsx";

export default function EditEventPage() {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventForm method="PATCH" event={data.event} />
    </>
  );
}
