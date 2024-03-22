import React from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";

import { queryClient, fetchEvent, updateEvent } from "../../util/http.js";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data, isError, error } = useQuery({
    queryKey: ["events", { details: id }],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newEvent = data.event;

      await queryClient.cancelQueries({
        queryKey: ["events", { details: id }],
      });
      const previousEvent = queryClient.getQueryData([
        "events",
        { details: id },
      ]);

      queryClient.setQueryData(["events", { details: id }], newEvent);

      return { previousEvent };
    },
    onError: (context) => {
      queryClient.setQueryData(
        ["events", { details: id }],
        context.previousEvent
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries(["events", { details: id }]);
    },
  });

  function handleSubmit(formData) {
    mutate({ id, event: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  return (
    <Modal onClose={handleClose}>
      {isError && (
        <>
          <ErrorBlock
            title="Could't fetch event"
            message={
              error.info?.message || "Something went wrong. Try again later."
            }
          />
          <div className="form-actions">
            <Link to="../" className="button">
              Okay
            </Link>
          </div>
        </>
      )}
      {data && (
        <EventForm inputData={data} onSubmit={handleSubmit}>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Update
          </button>
        </EventForm>
      )}
    </Modal>
  );
}

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ["events", { details: params.id }],
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
  });
}
