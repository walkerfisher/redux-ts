import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './state';
import RepositoriesList from './components/RepositoriesList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1> Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default App;
