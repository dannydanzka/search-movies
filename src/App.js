import React from 'react';
import { Title } from './components/title'
import { SearchForm } from './components/search.form'
import './App.css';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <Title>Search Movies</Title>
      <div className="SearchForm-wrapper">
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
