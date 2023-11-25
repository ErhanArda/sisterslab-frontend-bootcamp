import { logOutUser } from '@/store/userSlice';
import { AppBar, Toolbar, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          sx={{ my: 2, color: 'white', display: 'block' }}
          onClick={() => {
            router.push('/');
          }}
        >
          Home Page
        </Button>

        {isLoggedIn ? (
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
            onClick={() => dispatch(logOutUser())}
          >
            Log out
          </Button>
        ) : (
          <>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={() => {
                router.push('/login');
              }}
            >
              Login
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={() => {
                router.push('/signup');
              }}
            >
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
