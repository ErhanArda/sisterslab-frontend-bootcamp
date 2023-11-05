import { useEffect, useState } from 'react';
import { fetchCharacterWithSearch, fetchCharacters } from '../api';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import InfoCard from '@/components/InfoCard';

const Characters = () => {
  const router = useRouter();
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchBy, setSearchBy] = useState('name');
  const [errorFetch, setErrorFetch] = useState(null);

  const fetchCharacterData = () => {
    if (searchText) {
      fetchCharacterWithSearch(searchText, searchBy)
        .then((charactersList) => {
          setCharacters(charactersList);
          setErrorFetch(null);
        })
        .catch((error) => {
          setErrorFetch(error.message || 'Bir hata oluştu');
        });
    } else {
      fetchCharacters()
        .then((charactersList) => {
          setCharacters(charactersList);
          setErrorFetch(null);
        })
        .catch((error) => {
          setErrorFetch(error.message || 'Bir hata oluştu');
        });
    }
  };
  useEffect(() => {
    fetchCharacterData();

    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handleClick = (id) => {
    router.push(`/characters/${id}`);
  };

  const handleFavoriteToggle = (id) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter((favoriteId) => favoriteId !== id)
      : [...favorites, id];

    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (id) => favorites.includes(id);
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <FormControl size="small" sx={{ width: '150px' }}>
          <InputLabel id="demo-simple-select-label">Search By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={searchBy}
            label="Age"
            onChange={(e) => setSearchBy(e.target.value)}
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="status">Status</MenuItem>
            <MenuItem value="species">Species</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          fullWidth
          placeholder="Enter search text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={fetchCharacterData}
        >
          Search
        </Button>
      </Stack>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        {errorFetch ? (
          <Typography color="error">{errorFetch}</Typography>
        ) : (
          characters?.map((character) => (
            <InfoCard
              key={character.id}
              character={character}
              handleFavoriteToggle={handleFavoriteToggle}
              isFavorite={isFavorite}
              handleClick={handleClick}
            />
          ))
        )}
      </Stack>
    </Stack>
  );
};

export default Characters;
