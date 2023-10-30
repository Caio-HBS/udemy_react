import React, { useState } from "react";

const BASE_USER_INFO_FORM = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

export default function UserInput(props) {
  const [userInfo, setUserInfo] = useState(BASE_USER_INFO_FORM);

  function updateInfoHandler(inputIdentifier, updatedValue) {
    setUserInfo((prevInfo) => {
      return {
        ...prevInfo,
        [inputIdentifier]: updatedValue,
      };
    });
    props.onInfoChange(userInfo);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInfo.initialInvestment}
            onChange={(event) =>
              updateInfoHandler("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInfo.annualInvestment}
            onChange={(event) =>
              updateInfoHandler("annualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInfo.expectedReturn}
            onChange={(event) =>
              updateInfoHandler("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInfo.duration}
            onChange={(event) =>
              updateInfoHandler("duration", event.target.value)
            }
            required
          />
        </p>
      </div>
    </section>
  );
}
