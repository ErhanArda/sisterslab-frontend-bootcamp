import OptimizedWithCb from './components/OptimizedWithCb';
// import OptimizedWithUseMemo from './components/OptimizedWithUseMemo';
// import Square from './components/Square';
// import UnoptimizedWithUseMemo from './components/UnoptimizedWithUseMemo';

const App = () => {
  return (
    <div>
      {/* <Square /> */}
      {/* <OptimizedWithUseMemo />
      <UnoptimizedWithUseMemo /> */}
      <OptimizedWithCb />
    </div>
  );
};

export default App;
