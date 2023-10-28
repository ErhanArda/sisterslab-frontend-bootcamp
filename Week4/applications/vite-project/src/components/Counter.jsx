import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    // setCount(count + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      Count:{count}
      <button onClick={handleClick}>increment</button>
    </div>
  );
};

export default Counter;
