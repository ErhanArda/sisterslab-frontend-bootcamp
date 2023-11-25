import { registerUser } from '@/store/userSlice';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const SignUp = () => {
  const dispatch = useDispatch();
  const { error, user } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(registerUser(userData));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h5" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="Email Adresi"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            name="password"
            label="Sifre"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Kayit Ol
          </Button>
          {user && <Typography color="primary">Kayit Basarili</Typography>}
          {error && <Typography color="error">Hata: {error}</Typography>}
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
