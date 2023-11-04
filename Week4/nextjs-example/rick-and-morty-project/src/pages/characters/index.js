import { useEffect, useState } from 'react';
import { fetchCharacters } from '../api';
import { Stack, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import InfoCard from '@/components/InfoCard';

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
          <InfoCard
            key={character.id}
            character={character}
            handleFavoriteToggle={handleFavoriteToggle}
            isFavorite={isFavorite}
            handleClick={handleClick}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Characters;
