import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      App
      <Counter initialCount={0} minCount={0} maxCount={10} />
    </div>
  );
};

export default App;
