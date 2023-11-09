import React from "react";

import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Colourful clipboard and some pens" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
