import React, { useEffect } from "react";

import ProgressBar from "./ProgressBar.jsx";

const BASE_TIME = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    const modalTimer = setTimeout(() => {
      onConfirm();
    }, BASE_TIME);

    return () => {
      clearTimeout(modalTimer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar />
    </div>
  );
}
