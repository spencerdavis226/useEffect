import { useState } from 'react';
import Timer from './Timer';

const TimerWrapper = () => {
  const [timerVisable, setTimerVisable] = useState(true);

  const toggleTimer = () => {
    setTimerVisable(!timerVisable);
  };

  return (
    <div>
      <button onClick={toggleTimer}>Toggle Timer</button>
      {timerVisable && <Timer />}
    </div>
  );
};

export default TimerWrapper;
