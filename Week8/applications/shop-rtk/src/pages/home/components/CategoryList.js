import PropTypes from 'prop-types';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemButton,
} from '@mui/material';
import { StyledCategoryListStack } from './style';

const CategoryList = ({ categories, handleCategoryClick }) => {
  return (
    <StyledCategoryListStack
      direction="column"
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Typography variant="h4" color="grey">
        Categories
      </Typography>
      <List component="nav">
        {categories.map((category) => (
          <ListItem key={category} disablePadding>
            <ListItemButton onClick={() => handleCategoryClick(category)}>
              <ListItemText primary={category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </StyledCategoryListStack>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  handleCategoryClick: PropTypes.func.isRequired,
};

export default CategoryList;
