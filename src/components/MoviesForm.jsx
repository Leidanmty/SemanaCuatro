import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MoviesForm = ({ getMovies, movieSelected, deselectMovie }) => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [duration, setDuration] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  useEffect(() => {
    if (movieSelected !== null) {
      setName(movieSelected.name);
      setGenre(movieSelected.genre);
      setDuration(movieSelected.duration);
      setReleaseDate(movieSelected.release_date);
    }
  }, [movieSelected]);

  const submit = (e) => {
    e.preventDefault();
    const movieForm = {
      name: name,
      genre: genre,
      duration: duration,
      release_date: releaseDate
    };
    if (movieSelected !== null) {
      // Actualizando
      alert("Actualizando");
      axios
        .put(
          `https://movies-crud-academlo.herokuapp.com/movies/${movieSelected.id}/`,
          movieForm
        )
        .then(() => {
          getMovies();
          reset();
          deselectMovie();
        });
    } else {
      axios
        .post("https://movies-crud-academlo.herokuapp.com/movies/", movieForm)
        .then(() => {
          getMovies();
          reset();
        })
        .catch((error) => console.log(error.response));
    }
  };

  const reset = () => {
    setName("");
    setGenre("");
    setDuration("");
    setReleaseDate("");
  };

  const clear = () => {
    reset();
    deselectMovie();
  };

  return (
    <form onSubmit={submit}>
      <h1>Movies Form</h1>

      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="duration">Duration</label>
        <input
          type="text"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="releaseDate">Release Date</label>
        <input
          type="date"
          id="releaseDate"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
      </div>

      <button>Submit</button>
      <button type="button" onClick={clear}>
        Clear
      </button>
    </form>
  );
};

export default MoviesForm;
