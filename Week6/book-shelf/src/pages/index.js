import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/books')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.error('error :>> ', error));
  }, []);

  const handleSearch = useCallback(() => {
    axios
      .get(`http://localhost:3001/books?q=${search}`)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => console.log('error :>> ', error));
  }, [search]);

  const handleDelete = useCallback(
    (id) => {
      axios
        .delete(`http://localhost:3001/books/${id}`)
        .then(() => {
          setBooks(books.filter((book) => book.id !== id));
        })
        .catch((error) => console.error(error));
    },
    [books]
  );

  return (
    <Grid container spacing={2}>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <TextField
          label="Search Books"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
      </Stack>
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
                  <Button
                    size="small"
                    color="error"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default Home;
