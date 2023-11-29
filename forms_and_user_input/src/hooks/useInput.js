import React, { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [loginFormValue, setLoginFormValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(loginFormValue);

  function handleInputChange(event) {
    setLoginFormValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: loginFormValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
