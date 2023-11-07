import React, { useState } from "react";

import Sidebar from "./components/Sidebar.jsx";
import AddNewProject from "./components/AddNewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

export default function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleNewProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectsState)

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <AddNewProject onAddNewProject={handleNewProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projectsState.projects} onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}
