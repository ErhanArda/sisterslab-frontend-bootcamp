import { useState } from 'react';

const Counter = ({ initialCount, minCount, maxCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > minCount) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <>Count: {count}</>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
