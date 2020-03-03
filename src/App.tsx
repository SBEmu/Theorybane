import React from 'react';
import './App.css';
import {Character} from './components/Character'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Character />
      </header>
    </div>
  );
}

export default App;
