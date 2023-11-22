import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home.jsx";
import RootLayout from "./pages/Root.jsx";
import EventsPage from "./pages/Events.jsx";
import NewEventPage from "./pages/NewEvent.jsx";
import EditEventPage from "./pages/EditEvent.jsx";
import EventDetailPage from "./pages/EventDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/events/:eventId",
        element: <EventDetailPage />,
      },
      {
        path: "/events/new",
        element: <NewEventPage />,
      },
      {
        path: "/events/:eventId/edit",
        element: <EditEventPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
