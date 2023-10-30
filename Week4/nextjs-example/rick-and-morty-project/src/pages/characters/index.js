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

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const getCharacters = async () => {
    const characters = await fetchCharacters();
    setCharacters(characters);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const handleCharacterSelect = (e, value) => {
    setSelectedCharacter(value);
  };
  console.log('selectedCharacter :>> ', selectedCharacter);

  const filteredCharacters = selectedCharacter
    ? characters.filter((character) => character.id === selectedCharacter.id)
    : characters;

  return (
    <Stack spacing={2}>
      <Autocomplete
        id="combo-box"
        options={characters}
        getOptionLabel={(character) => character.name}
        onChange={handleCharacterSelect}
        sx={{ width: 300 }}
        size="small"
        renderInput={(params) => <TextField {...params} label="Character" />}
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
              <IconButton aria-label="add to favorites">
                <FavoriteIcon color="error" />
              </IconButton>
              <Button size="small" variant="text">
                Details
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};

export default Characters;
