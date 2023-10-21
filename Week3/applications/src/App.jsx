import CoinFlipper from './components/CoinFlipper';
import Counter from './components/Counter';
import Text from './components/Text';

const App = () => {
  return (
    <div>
      App
      <br />
      <Counter initialCount={0} minCount={0} maxCount={10} />
      <br />
      <Text placeholder="Type something" />
      <br />
      <CoinFlipper />
    </div>
  );
};

export default App;
