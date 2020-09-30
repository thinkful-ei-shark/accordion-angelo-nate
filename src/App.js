import React from 'react';
import './App.css';
import TheDate from './state/TheDate'
import Counter from './state/Counter'

function App() {
  return (
    <div className="App">
      <TheDate />
      <Counter count={123} />
    </div>
  );
}
export default App;