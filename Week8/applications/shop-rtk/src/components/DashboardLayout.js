import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Stack } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchFromLocalStorage, updateCart } from '@/store/cartSlice';
import { useRouter } from 'next/router';

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const { itemCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const cartFromLocalStorage = fetchFromLocalStorage();
    dispatch(updateCart(cartFromLocalStorage));
  }, [dispatch]);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => router.push('/')}
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <img src="logo_path_here" alt="Logo" />
          </IconButton>
          <Stack sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <IconButton color="inherit">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => router.push('/cart')}>
            <Badge badgeContent={itemCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Stack sx={{ padding: '20px 60px' }}>{children}</Stack>
    </>
  );
};

export default DashboardLayout;
