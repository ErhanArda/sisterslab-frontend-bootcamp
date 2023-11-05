import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchCharacters } from '../api';
import { Stack, Typography } from '@mui/material';
import InfoCard from '@/components/InfoCard';

const Favorites = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    getCharacters();
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);
  const getCharacters = async () => {
    const characters = await fetchCharacters();
    setCharacters(characters);
  };

  const favoriteCharacters = characters.filter((character) =>
    favorites.includes(character.id)
  );

  // const handleFavoriteToggle = (id) => {
  //   const newFavorites = favorites.includes(id)
  //     ? favorites.filter((favoriteId) => favoriteId !== id)
  //     : [...favorites, id];

  //   setFavorites(newFavorites);
  //   localStorage.setItem('favorites', JSON.stringify(newFavorites));
  // };

  const handleFavoriteToggle = useCallback(
    (id) => {
      const newFavorites = favorites.includes(id)
        ? favorites.filter((favoriteId) => favoriteId !== id)
        : [...favorites, id];

      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    },
    [favorites]
  );

  // const favoriteCount = characters.filter((character) =>
  //   favorites.includes(character.id)
  // ).length;

  const isFavorite = (id) => favorites.includes(id);

  const favoriteCount = useMemo(() => {
    return characters.filter((character) => favorites.includes(character.id))
      .length;
  }, [favorites, characters]);

  return (
    <Stack spacing={2}>
      <Typography variant="h1">Your Favorite Characters</Typography>
      <Typography>favori sayim: {favoriteCount}</Typography>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        {favoriteCharacters.map((character) => (
          <InfoCard
            key={character.id}
            character={character}
            handleFavoriteToggle={handleFavoriteToggle}
            isFavorite={isFavorite}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Favorites;
