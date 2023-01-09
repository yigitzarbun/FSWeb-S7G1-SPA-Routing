import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

import KaydedilenlerListesi from "./Filmler/KaydedilenlerListesi";
import FilmListesi from "./Filmler/FilmListesi";
import Film from "./Filmler/Film";

export default function App() {
  const [saved, setSaved] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get("http://localhost:5001/api/filmler")
        .then((response) => {
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Sunucu Hatası", error);
        });
    };
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = (movie) => {
    const savedArr = saved;
    savedArr.find((a) => a.id === movie.id) !== null && savedArr.push(movie);
    setSaved([...savedArr]);
  };

  return (
    <div>
      <KaydedilenlerListesi list={saved} />
      <Routes>
        <Route exact path="/" element={<FilmListesi movies={movieList} />} />
        <Route
          path="filmler/:id"
          element={
            <Film
              movies={movieList}
              saved={saved}
              KaydedilenlerListesineEkle={KaydedilenlerListesineEkle}
            />
          }
        />
      </Routes>
    </div>
  );
}
