import React, { useState } from "react";
import { MOVIES } from "./components/Helpers/Movie";
import MainContent from "./components/Maincontent/MainContent";
import "./App.css";
import Header from "./components/Header/Header";

const App = () => {
  const [movies, setMovies] = useState(MOVIES);

  const addNewMovie = (newMovie) => {
    console.log('/', newMovie, );
    setMovies([...movies, newMovie]);
    console.log(newMovie);
  };

  const deleteMovieHandler = (deletingMovieId) => {
    const filteredMovies = movies.filter(
      (movie) => movie.id !== deletingMovieId
    );
    setMovies(filteredMovies);
  };

  return (
    <>
      <Header onAddNewMovie={addNewMovie} />
      <MainContent movies={movies} deleteMovieHandler={deleteMovieHandler} />
    </>
  );
};

export default App;
