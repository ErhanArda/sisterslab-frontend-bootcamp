import { useEffect, useState } from 'react';
import { fetchCharacters } from '../api';
import {
  Autocomplete,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useRouter } from 'next/router';

const Characters = () => {
  const router = useRouter();
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [searchText, setSearchText] = useState('');

  const getCharacters = async () => {
    const characters = await fetchCharacters();
    setCharacters(characters);
  };

  useEffect(() => {
    getCharacters();

    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // const handleCharacterSelect = (e, value) => {
  //   setSelectedCharacter(value);
  // };

  const handleClick = (id) => {
    router.push(`/characters/${id}`);
  };

  // const filteredCharacters = selectedCharacter
  //   ? characters.filter((character) => character.id === selectedCharacter.id)
  //   : characters;

  const filteredCharacters = characters.filter((character) => {
    return (
      character.name.toLowerCase().includes(searchText.toLowerCase()) ||
      character.status.toLowerCase().includes(searchText.toLowerCase()) ||
      character.gender.toLowerCase().includes(searchText.toLowerCase())
    );
  });

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
      {/* <Autocomplete
        id="combo-box"
        options={characters}
        getOptionLabel={(character) => character.name}
        onChange={handleCharacterSelect}
        sx={{ width: 300 }}
        size="small"
        renderInput={(params) => <TextField {...params} label="Character" />}
      /> */}
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        fullWidth
        placeholder="Search by name, status, gender"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        {filteredCharacters.map((character) => (
          <Card key={character.id} sx={{ width: '150px' }}>
            <CardMedia
              component="img"
              alt="character"
              height="140"
              image={character.image}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {character.gender} {character.status}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
                aria-label="add to favorites"
                onClick={() => handleFavoriteToggle(character.id)}
              >
                <FavoriteIcon
                  color={isFavorite(character.id) ? 'error' : 'disabled'}
                />
              </IconButton>
              <Button
                size="small"
                variant="text"
                onClick={() => handleClick(character.id)}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};

export default Characters;
