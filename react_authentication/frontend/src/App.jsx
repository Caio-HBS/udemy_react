import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { loader as tokenLoader, checkAuthLoader } from "./util/auth.js";

import { action as manipulateEventAction } from "./components/EventForm.jsx";

import EditEventPage from "./pages/EditEvent.jsx";
import ErrorPage from "./pages/Error.jsx";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail.jsx";
import EventsPage, { loader as eventsLoader } from "./pages/Events.jsx";
import EventsRootLayout from "./pages/EventsRoot.jsx";
import HomePage from "./pages/Home.jsx";
import NewEventPage from "./pages/NewEvent.jsx";
import RootLayout from "./pages/Root.jsx";
import NewsletterPage, {
  action as newsletterAction,
} from "./pages/Newsletter.jsx";
import AuthenticationPage, {
  action as authenticationAction,
} from "./pages/Authentication.jsx";
import { action as logoutAction } from "./pages/Logout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
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
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
            loader: checkAuthLoader,
          },
        ],
      },
      {
        path: "auth",
        element: <AuthenticationPage />,
        action: authenticationAction,
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
