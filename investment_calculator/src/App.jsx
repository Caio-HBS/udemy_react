import React from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import ResultTable from "./components/ResultTable.jsx";

import { calculateInvestmentResults, formatter } from "./util/investment.js";



export default function App() {

  function infoChangeHandler(userInfo) {
    console.log(userInfo)
  }

  return (
    <>
      <Header />

      <UserInput onInfoChange={infoChangeHandler} />

      <ResultTable />
    </>
  );
}
