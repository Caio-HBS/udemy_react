import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home.jsx";
import ErrorPage from "./pages/Error.jsx";
import RootLayout from "./pages/Root.jsx";
import NewEventPage, { action as newEventAction } from "./pages/NewEvent.jsx";
import EditEventPage from "./pages/EditEvent.jsx";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail.jsx";
import EventsRootLayout from "./pages/EventsRoot.jsx";
import EventsPage, { loader as eventsLoader } from "./pages/Events.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },

          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
