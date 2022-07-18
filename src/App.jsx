import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import MoviesList from "./components/MoviesList";
import MoviesForm from "./components/MoviesForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieSelected, setMovieSelected] = useState(null);

  useEffect(() => {
    axios
      .get("https://movies-crud-academlo.herokuapp.com/movies/")
      .then((res) => setMovies(res.data));
  }, []);

  const getMovies = () => {
    axios
      .get("https://movies-crud-academlo.herokuapp.com/movies/")
      .then((res) => setMovies(res.data));
  };

  const selectMovie = (movie) => {
    alert('Seleccionaste este target')
    setMovieSelected(movie);
  };

  const deselectMovie = () => setMovieSelected(null);

  return (
    <div className="App">
      <MoviesForm
        getMovies={getMovies}
        movieSelected={movieSelected}
        deselectMovie={deselectMovie}
      />
      <MoviesList
        movies={movies}
        selectMovie={selectMovie}
        getMovies={getMovies}
      />
    </div>
  );
}

export default App;
