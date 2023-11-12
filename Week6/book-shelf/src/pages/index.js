import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.error('error :>> ', error));
  }, []);

  return (
    <Grid container spacing={2}>
      <Link href="/add-book">
        <Button variant="contained" color="primary">
          Add Book
        </Button>
      </Link>
      {books &&
        books.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={book.imageUrl ?? 'https://picsum.photos/200/300'}
                  alt={book.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.description}...
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href={`/books/${book.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button variant="contained" size="small">
                      Details
                    </Button>
                  </Link>
                  <Link
                    href={`/edit-books/${book.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button variant="outlined" size="small">
                      Edit
                    </Button>
                  </Link>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default Home;
