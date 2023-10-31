import React, { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import ResultTable from "./components/ResultTable.jsx";

const BASE_USER_INFO_FORM = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

export default function App() {
  const [userInfo, setUserInfo] = useState(BASE_USER_INFO_FORM);

  const showTable = userInfo.duration >= 1;

  function updateInfoHandler(inputIdentifier, updatedValue) {
    setUserInfo((prevInfo) => {
      return {
        ...prevInfo,
        [inputIdentifier]: +updatedValue,
      };
    });
  }

  return (
    <>
      <Header />

      <UserInput userInfo={userInfo} onChange={updateInfoHandler} />

      {showTable ? (
        <ResultTable results={userInfo} />
      ) : (
        <p className="center">
          Please enter a valid duration (greater than 0).
        </p>
      )}
    </>
  );
}
