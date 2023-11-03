import React, { useState, useRef } from "react";

export default function Player({ onNewName, curName }) {
  const playerName = useRef();
  const [enteredName, setEnteredName] = useState(null);

  function clickHandler() {
    setEnteredName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
