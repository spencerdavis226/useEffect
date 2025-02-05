import { useState, useEffect } from 'react';

const Counter = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum((n) => n + 1);
  };

  useEffect(() => {
    console.log('Running callback');
    document.title = `Hi${'!'.repeat(num)}`;
  });

  return (
    <div>
      {console.log('Rendering')}
      Lets get excited.
      <button onClick={increment}>Get more excited.</button>
      <p>Counter: {num}</p>
    </div>
  );
};

export default Counter;
