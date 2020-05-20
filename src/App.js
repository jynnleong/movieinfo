import React, {useState, useEffect}from 'react';
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import './App.css';
import Movie from './Movies';

function App() {
  const APP_KEY = "fef43b93";

  const[movies, setMovies] = useState([]);
  const[search, setSearch] = useState("");
  const[query, setQuery] = useState("Avengers");

  useEffect(() => {
    getMovies();
  }, [query]);

  const getMovies = async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${APP_KEY}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  const resetSearch = () => {
    setQuery("Avengers");
  }


  return (
    <Router>
    <div className="App">
      <header className="search-bar">
        <Link to="/" onClick={resetSearch}><h1>Movinfo</h1></Link>
        <form onSubmit={getSearch} className="movie-input">
          <input type="text" className="movie-search" value={search} onChange={updateSearch}/>
          <button type="submit" className="movie-search-button">Search</button>
        </form>
      </header>
      <div className="movies">
        {movies.map(movie => (
          <Movie key="movie" name={movie.Title} Description={movie.Year} image={movie.Poster}/>
        ))}
      </div>
    </div>
    </Router>
  );
}

export default App;
