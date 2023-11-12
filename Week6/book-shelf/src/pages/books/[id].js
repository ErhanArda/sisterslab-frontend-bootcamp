import { Container, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BookDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBooks] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3001/books/${id}`)
        .then((response) => {
          setBooks(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <Container>
      <img
        src={book.imgUrl ?? 'https://picsum.photos/200/300'}
        alt={book.title}
        loading="lazy"
      />
      <Typography variant="h4">{book.title}</Typography>
      <Typography variant="h5">{book.author}</Typography>
      <Typography variant="h6">
        {book.currency} {book.price}
      </Typography>
      <Typography variant="body">{book.description}</Typography>
    </Container>
  );
};

export default BookDetail;
