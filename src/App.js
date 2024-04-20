import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import MovieList from './MovieList';


const API_KEY = '4893877286f3f5bec98a69d910da0ceb'; // Replace with your TMDb API key

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');




  async function searchMovies(term){
    try{
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}`)
        const data_json = await data.json()
        
        setMovies(data_json.results)

    }catch(error){
      console.error(error)
    }

  }

  useEffect(() => {
    if (searchTerm) {
      searchMovies(searchTerm);
    }
  }, [searchTerm]);

  function onSearch(event){
    setSearchTerm(event.target.value)
  }

  return (
    <div className="App">
      <SearchForm searchTerm={searchTerm}   onSearch={onSearch} />
      <MovieList movies={movies} />
    </div>
  );
}


export default App;
