import React from "react";
import axios from "axios";

const MoviesList = ({ movies, selectMovie, getMovies }) => {
  const deleteMovie = (id) => {
    alert("Eliminando");
    axios
      .delete(`https://movies-crud-academlo.herokuapp.com/movies/${id}/`)
      .then(() => getMovies());
  };

  return (
    <ul>
      <h1>MoviesList</h1>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.name}</h3>
          <div>
            <b>Genre: </b> {movie.genre}
          </div>
          <div>
            <b>Duration: </b> {movie.duration}
          </div>
          <div>
            <b>Release date: </b> {movie.release_date}
          </div>
          <button onClick={() => selectMovie(movie)}>Edit</button>
          <button onClick={() => deleteMovie(movie.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
