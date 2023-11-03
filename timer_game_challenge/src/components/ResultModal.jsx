import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
  const dialogElement = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogElement.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialogElement} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stop the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
