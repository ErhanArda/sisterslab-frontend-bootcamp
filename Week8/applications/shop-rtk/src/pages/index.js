import ImageSlider from '@/components/ImageSlider';
import { fetchCategories, fetchProductByCategory } from '@/store/productSlice';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Rating,
  Select,
  Skeleton,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PriceDisplay = styled(Box)(({ theme }) => ({
  fontWeight: 'bold',
  marginTop: theme.spacing(1),
}));

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { categories, loadingCategories, defaultCategory } = useSelector(
    (state) => state.products
  );

  const { products, loadingProducts } = useSelector((state) => state.products);

  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [sortOrder, setSortOrder] = useState('inc');

  const handleSortChange = () => {
    setSortOrder(sortOrder === 'inc' ? 'dec' : 'inc');
  };

  const sortedProducts =
    sortOrder === 'inc' ? products : [...products].reverse();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // const handleCategoryClick = (category) => {
  //   if (category !== selectedCategory) {
  //     setSelectedCategory(category);
  //     dispatch(fetchProductByCategory(category));
  //   }
  // };

  const handleCategoryClick = useCallback(
    (category) => {
      if (category !== selectedCategory) {
        setSelectedCategory(category);
        dispatch(fetchProductByCategory(category));
      }
    },
    [selectedCategory, dispatch]
  );

  useEffect(() => {
    // const defaultCategory = 'electronics';
    dispatch(fetchProductByCategory(defaultCategory));
  }, [dispatch]);

  return (
    <Stack direction="column" spacing={4}>
      <ImageSlider />
      <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="sort-order">Sort</InputLabel>
        <Select
          id="sort-order-select"
          value={sortOrder}
          label="Sort"
          onChange={handleSortChange}
        >
          <MenuItem value="inc">Inc</MenuItem>
          <MenuItem value="dec">Dec</MenuItem>
        </Select>
      </FormControl>
      <Stack direction="row" spacing={3}>
        <Stack
          direction="column"
          sx={{
            borderRadius: '4px',
            background: 'aliceBlue',
            padding: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            height: 'fit-content',
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

        <Stack
          spacing={{ xs: 1, sm: 3, md: 3 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
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
            : sortedProducts.map((product) => (
                <Card
                  key={product.id}
                  sx={{ maxWidth: 345, cursor: 'pointer' }}
                  onClick={() => router.push(`/products/${product.id}`)}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.title}
                    </Typography>
                    <PriceDisplay>${product.price}</PriceDisplay>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mt: 2,
                      }}
                    >
                      <Rating
                        name="read-only"
                        value={product.rating.rate}
                        readOnly
                      />
                      <Typography variant="body2" color="text.secondary">
                        ({product.rating.count} reviews)
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
