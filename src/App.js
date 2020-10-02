import React from 'react';
import './css/App.css';

// Components
import Counter from './containers/Counter';
import Connect from './containers/Connect';
function App() {
  return (
    <div className="App">
      <Counter />
      <Connect />
    </div>
  );
}

export default App;
