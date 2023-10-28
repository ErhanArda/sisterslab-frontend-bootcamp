import { useEffect, useState } from 'react';

const BlogPost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/posts/1')
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* optional chaining */}
      {/* <>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
      </> */}

      {/* post degerini kontrol ederek */}

      <>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </>
        )}
      </>
    </div>
  );
};

export default BlogPost;
