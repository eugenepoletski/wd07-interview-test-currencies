import React from 'react';
import styles from './App.css';
import CurrenciesContainer from './components/CurrenciesContainer/CurrenciesContainer'
import ErrorsContainer from './components/ErrorsContainer/ErrorsContainer'

const App = props => {
  return (
    <div>
      <ErrorsContainer />
      <CurrenciesContainer />
    </div>
  );
}

export default App;