import React from "react";

import Sidebar from "./components/Sidebar.jsx";
import AddNewProject from "./components/AddNewProject.jsx";

export default function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <AddNewProject />
    </main>
  );
}
