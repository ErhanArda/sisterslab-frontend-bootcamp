import { useSelector } from 'react-redux';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const { cart, totalAmount } = useSelector((state) => state.cart);
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
            <IconButton color="error">
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      ))}
      <Typography>Toplam Tutar: {totalAmount}</Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }}>
        <Button variant="contained" color="primary">
          Satin Al
        </Button>
        <Button variant="contained" color="secondary">
          Sepeti Temizle
        </Button>
      </Stack>
    </Stack>
  );
};

export default Cart;
