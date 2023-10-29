import { useState } from 'react';
import PostBody from './PostBody';

const RandomPost = () => {
  const [id, setId] = useState(1);

  return (
    <div>
      <button onClick={() => setId(Math.floor(Math.random() * 100) + 1)}>
        Show me a random post
      </button>
      <PostBody id={id} />
    </div>
  );
};

export default RandomPost;
