import React from "react";

import MainNavigation from "../components/MainNavigation.jsx";

export default function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>404 Error: page not found</h1>
        <p>"Impossible, perhaps the archives are incomplete!"</p>
      </main>
    </>
  );
}
