import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { clearCart, getCartTotal, removeFromCart } from '@/store/cartSlice';
import { useEffect } from 'react';

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, totalAmount } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (id, count) => {
    dispatch(removeFromCart({ id, count }));
  };

  const handleGetTotal = () => {
    dispatch(getCartTotal());
  };

  useEffect(() => {
    handleGetTotal();
  }, [cart]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h4" gutterBottom>
        Alisveris Sepetim
      </Typography>
      {cart.map((item) => (
        <Box key={item.id} display="flex" alignItem="center" marginBottom={2}>
          <Box marginRight={2}>
            <img src={item.image} alt={item.title} width="100" />
          </Box>
          <Box flexGrow={1}>
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body">{`${item.price} TL - ${item.count} adet`}</Typography>
          </Box>
          <Box>
            <IconButton
              color="error"
              onClick={() => handleRemoveFromCart(item.id, item.count)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      ))}
      <Typography>Toplam Tutar: {totalAmount.toFixed(2)} TL</Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button variant="contained" color="primary">
          Satin Al
        </Button>
        <Button variant="contained" color="secondary" onClick={handleClearCart}>
          Sepeti Temizle
        </Button>
      </Stack>
    </Stack>
  );
};

export default Cart;
