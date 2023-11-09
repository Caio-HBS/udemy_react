import React, { useEffect, useState } from "react";

export default function QuestionTimer({ timerValue, onTimeout }) {
  const [remainingTime, setReaimingTime] = useState(timerValue);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timerValue);

    return () => {
      clearTimeout(timer);
    };
  }, [timerValue, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setReaimingTime((prevTimer) => prevTimer - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timerValue} />;
}
