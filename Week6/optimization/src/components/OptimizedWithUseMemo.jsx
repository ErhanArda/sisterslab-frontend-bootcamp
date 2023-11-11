import { useMemo, useState } from 'react';

const OptimizedWithUseMemo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const sum = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += i;
    }
    return sum;
  }, []);

  return (
    <div>
      <h2>OptimizedWithUseMemo</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default OptimizedWithUseMemo;
