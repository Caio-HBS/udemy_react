import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home.js";

const router = createBrowserRouter([{ path: "/", element: <HomePage /> }, {}]);

export default function App() {
  return <RouterProvider router={router} />;
}
