import { fetchProductDetails } from '@/store/productSlice';
import { Box, Rating, Typography, styled } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
// {
//     "id": 9,
//     "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//     "price": 64,
//     "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//     "rating": {
//         "rate": 3.3,
//         "count": 203
//     }
// }
const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const { productDetails, loadingProductDetails } = useSelector(
    (state) => state.products
  );

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
      </StyledDetailsBox>
    </Box>
  );
};

export default ProductDetails;
