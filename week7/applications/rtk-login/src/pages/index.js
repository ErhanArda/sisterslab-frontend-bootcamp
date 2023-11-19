import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.user.user);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div>
      {isLoggedIn && user ? <h1>Hello User</h1> : <h1>Please Log In</h1>}
    </div>
  );
};

export default Home;
