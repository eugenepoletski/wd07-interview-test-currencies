import React from 'react';
import styles from './App.scss';
import CurrenciesContainer from './components/CurrenciesContainer/CurrenciesContainer'
import ErrorsContainer from './components/ErrorsContainer/ErrorsContainer'

const App = props => {
  return (
    <div className={styles.container}>
      <ErrorsContainer />
      <CurrenciesContainer />
    </div>
  );
}

export default App;