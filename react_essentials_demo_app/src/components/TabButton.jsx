import React from "react";

export default function TabButton(props) {
  function clickHandler() {
    props.onSelect();
  }

  return (
    <li>
      <button
        className={props.isSelected ? "active" : undefined}
        onClick={clickHandler}
      >
        {props.children}
      </button>
    </li>
  );
}
