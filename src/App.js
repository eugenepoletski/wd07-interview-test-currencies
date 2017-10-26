import React from 'react';
import './App.css';
import './styles/main.scss';
import CurrenciesContainer from './components/CurrenciesContainer/CurrenciesContainer'

const App = props => {
  return (
    <div>
      <CurrenciesContainer />
    </div>
  );
}

export default App;