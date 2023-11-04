import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const InfoCard = ({
  character,
  handleFavoriteToggle,
  isFavorite,
  handleClick,
}) => {
  return (
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
  );
};

InfoCard.propTypes = {
  character: PropTypes.object.isRequired,
  handleFavoriteToggle: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  isFavorite: PropTypes.func.isRequired,
};

InfoCard.defaultProps = {
  character: {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',

    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  },
};

export default InfoCard;
