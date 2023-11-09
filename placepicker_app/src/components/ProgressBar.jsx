import React, { useState, useEffect } from "react";

const BASE_TIME = 3000;

export default function ProgressBar() {
  const [remainingTime, setRemainingTime] = useState(BASE_TIME);

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(intervalTime);
    };
  }, []);

  return <progress value={remainingTime} max={BASE_TIME} />;
}
