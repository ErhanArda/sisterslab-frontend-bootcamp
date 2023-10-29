import { useEffect, useState } from 'react';

const PostBody = ({ id }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setText(data.body);
      });
  }, [id]);

  return <div>{text}</div>;
};

export default PostBody;
