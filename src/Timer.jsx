import { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const timerID = useRef();

  useEffect(() => {
    timerID.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(timerID.current); // Cleanup function to prevent multiple intervals
  }, []);

  const stopTimer = () => {
    clearInterval(timerID.current);
  };

  return (
    <div>
      <h1>{seconds}</h1>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Timer;
