import React, { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function editButtonHandler() {
    setIsEditing((editing) => !editing);
  }

  function changeNameHandler(event) {
    setPlayerName(event.target.value);
    console.log("test")
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            required
            value={playerName}
            onChange={changeNameHandler}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editButtonHandler}>
        {!isEditing ? "Edit" : "Save"}
      </button>
    </li>
  );
}
