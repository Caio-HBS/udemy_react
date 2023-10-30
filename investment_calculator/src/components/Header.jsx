import React from "react";

import mainLogo from "../assets/investment-calculator-logo.png"

export default function Header() {
  return (
    <div id="header">
      <img src={mainLogo} alt="Investment app logo" />
      <h1>React Investment Calculator</h1>
    </div>
  )
}