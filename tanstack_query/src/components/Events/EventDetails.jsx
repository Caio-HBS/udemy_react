import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Link, Outlet, useParams, useNavigate } from "react-router-dom";

import { queryClient, fetchEvent, deleteEvent } from "../../util/http.js";

import Header from "../Header.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { details: id }],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  const { mutate } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  function handleDelete(event) {
    event.preventDefault();

    mutate({ id });
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">
        {isPending && (
          <div id="event-details-content" className="center">
            <p>Fetching event details...</p>
          </div>
        )}
        {isError && (
          <ErrorBlock
            title="Failed to fetch event details."
            message={
              error.info?.message ||
              "There was a problem trying to fetch the event details. Please try again later."
            }
          />
        )}
        {data && (
          <>
            <header>
              <h1>{data.title}</h1>
              <nav>
                <button onClick={handleDelete}>Delete</button>
                <Link to="edit">Edit</Link>
              </nav>
            </header>
            <div id="event-details-content">
              <img
                src={`http://localhost:3000/${data.image}`}
                alt="Event image."
              />
              <div id="event-details-info">
                <div>
                  <p id="event-details-location">{data.location}</p>
                  <time dateTime={`Todo-DateT$Todo-Time`}>
                    {data.date} @ {data.time}
                  </time>
                </div>
                <p id="event-details-description">{data.description}</p>
              </div>
            </div>
          </>
        )}
      </article>
    </>
  );
}
