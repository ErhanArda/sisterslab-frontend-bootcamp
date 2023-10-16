// import './App.css';

import FirstComponent from './components/FirstComponent';

function App() {
  // const name = 'John';
  const person = {
    name: 'John',
    age: 25,
  };
  const loggedIn = false;
  console.log(person);
  // if (loggedIn) {
  //   return (
  //     <div>
  //       Hello {person.name},age is {person.age}
  //     </div>
  //   );
  // } else {
  //   return <>Giris yapmalisin</>;
  // }
  return (
    <div
      style={{
        color: 'red',
      }}
      className="app"
    >
      {/* {loggedIn ? (
        <div>
          Hello {person.name},age is {person.age}
        </div>
      ) : (
        <>Giris yapmalisin</>
      )} */}
      <FirstComponent
        title="My First Component"
        person={person}
        hobbies={['swimming', 'reading', 'running']}
        componentExample={<div>Component Example</div>}
      />
    </div>
  );
}

export default App;
