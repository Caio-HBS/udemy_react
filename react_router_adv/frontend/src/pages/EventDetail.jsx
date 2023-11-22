import React from "react";
import { useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h1>Event Detail Page!</h1>
      <p>{params.eventId}</p>
    </>
  );
}