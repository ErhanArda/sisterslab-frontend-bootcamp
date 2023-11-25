import ImageSlider from '@/components/ImageSlider';
import { fetchCategories, fetchProductByCategory } from '@/store/productSlice';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PriceDisplay = styled(Box)(({ theme }) => ({
  fontWeight: 'bold',
  marginTop: theme.spacing(1),
}));

const Home = () => {
  const dispatch = useDispatch();
  const { categories, loadingCategories } = useSelector(
    (state) => state.products
  );

  const { products, loadingProducts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(fetchProductByCategory(category));
  };

  return (
    <div>
      <ImageSlider />
      <Stack direction="row" spacing={3}>
        <Stack
          direction="column"
          sx={{
            borderRadius: '4px',
            background: 'aliceBlue',
            padding: '20px',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            // height: 'fit-content',
          }}
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
        </Stack>
        {loadingProducts
          ? Array.from(new Array(6)).map((item, index) => (
              <Card key={index} sx={{ width: '345px' }}>
                <Skeleton variant="rectangular" width="100%" height={140} />
                <CardContent>
                  <Skeleton variant="text" height={140} />
                  <Skeleton variant="text" width="60%" />
                </CardContent>
              </Card>
            ))
          : products.map((product) => (
              <Card
                key={product.id}
                sx={{ maxWidth: '345px', cursor: 'pointer' }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <PriceDisplay>${product.price}</PriceDisplay>
                </CardContent>
              </Card>
            ))}
      </Stack>
    </div>
  );
};

export default Home;
