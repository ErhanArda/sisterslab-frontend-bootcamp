import { useEffect, useState } from 'react';

const PostBody = ({ id }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('data :>> ', data);
      });
  }, [id]);

  return <div>{text}</div>;
};

export default PostBody;
