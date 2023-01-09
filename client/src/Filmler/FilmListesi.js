import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function FilmListesi(props) {
  const { movies } = props;
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <FilmDetayları key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function FilmDetayları(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <Link to={`/filmler/${props.movie.id}`}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </Link>
    </div>
  );
}
