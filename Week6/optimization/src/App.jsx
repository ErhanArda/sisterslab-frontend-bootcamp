import OptimizedWithUseMemo from './components/OptimizedWithUseMemo';
import Square from './components/Square';
import UnoptimizedWithUseMemo from './components/UnoptimizedWithUseMemo';

const App = () => {
  return (
    <div>
      {/* <Square /> */}
      <OptimizedWithUseMemo />
      <UnoptimizedWithUseMemo />
    </div>
  );
};

export default App;
