import { fetchCharacter } from '@/pages/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CharacterDetail = () => {
  const router = useRouter();

  const { id } = router.query;
  const [character, setCharacter] = useState(null);

  const getCharacter = async () => {
    const characterResponse = await fetchCharacter(id);
    setCharacter(characterResponse);
  };

  useEffect(() => {
    if (id) {
      getCharacter();
    }
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export default CharacterDetail;
