import { fetchProductDetails } from '@/store/productSlice';
import {
  Box,
  Button,
  IconButton,
  Rating,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from '@/store/cartSlice';

const StyledImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '40%',
  },
}));

const StyledDetailsBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '60%',
  },
}));

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const { productDetails, loadingProductDetails } = useSelector(
    (state) => state.products
  );
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDecrease = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: productDetails.id,
        title: productDetails.title,
        image: productDetails.image,
        price: productDetails.price,
        count: count,
      })
    );
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [id, dispatch]);

  if (loadingProductDetails) {
    return <div>Loading...</div>;
  }
  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="flex-start"
      bgcolor="background.paper"
      p={2}
      boxShadow={3}
      borderRadius={2}
    >
      <StyledImageBox>
        <img
          src={productDetails.image}
          alt={productDetails.title}
          style={{ width: '100%', height: 'auto', borderRadius: 4 }}
        />
      </StyledImageBox>
      <StyledDetailsBox>
        <Typography variant="h5" component="h2" gutterBottom>
          {productDetails.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {productDetails.description}
        </Typography>
        <Rating
          name="read-only"
          value={productDetails.rating?.rate}
          precision={0.1}
          readOnly
        />
        <Typography variant="body2" color="text.secondary">
          {`${productDetails.rating?.count} reviews`}
        </Typography>
        <Typography variant="h4" component="p" mt={2}>
          {`$ ${productDetails.price}`}
        </Typography>

        <Stack>
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton color="primary" onClick={handleDecrease}>
              <RemoveIcon />
            </IconButton>
            <Typography sx={{ width: '40px', textAlign: 'center' }}>
              {count}
            </Typography>
            <IconButton color="primary" onClick={handleIncrease}>
              <AddIcon />
            </IconButton>
          </Stack>
          <Button
            variant="contained"
            startIcon={<AddShoppingCartIcon />}
            sx={{ width: '200px' }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Stack>
      </StyledDetailsBox>
    </Box>
  );
};

export default ProductDetails;
