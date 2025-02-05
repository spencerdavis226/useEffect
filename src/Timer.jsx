import { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup function to prevent multiple intervals
  }, []);

  return <h1>{seconds}</h1>;
};

export default Timer;
