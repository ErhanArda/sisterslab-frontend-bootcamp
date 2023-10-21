import { useState } from 'react';

const Text = ({ placeholder }) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <input placeholder={placeholder} value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText('')}>Reset</button>
    </>
  );
};

export default Text;
