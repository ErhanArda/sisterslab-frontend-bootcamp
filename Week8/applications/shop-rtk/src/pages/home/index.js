import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Skeleton,
  Stack,
  Typography,
  styled,
} from '@mui/material';

import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProductByCategory } from '@/store/productSlice';
import ImageSlider from '@/components/ImageSlider';
import SelectMenu from '@/components/SelectMenu';
import CategoryList from './components/CategoryList';

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
      <SelectMenu
        inputLabel="Sort"
        value={sortOrder}
        onChange={handleSortChange}
        sx={{ m: 1, minWidth: 120 }}
        options={[
          { id: 0, value: 'inc', label: 'Increment' },
          { id: 1, value: 'dec', label: 'Decrement' },
        ]}
      />
      <Stack direction="row" spacing={3}>
        <CategoryList
          categories={categories}
          handleCategoryClick={handleCategoryClick}
        />

        <Stack
          spacing={{ xs: 1, sm: 3, md: 3 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          {loadingProducts
            ? Array.from(new Array(6)).map((index) => (
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
