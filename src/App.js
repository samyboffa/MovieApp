import React, { useState } from "react";
import "./App.css";
import movieList from "./components/AllMovies.jsx";
import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList";

import { Filter } from "./components/Filter";

function App() {
    //Add new Movie
    const [movie, setMovie] = useState(movieList);
    const addMovie = (newMovie) => {
        setMovie([newMovie, ...movie]);
    };
    //Search Movie By name
    const searchMovie = (input) => {
        setMovie(
            movieList.filter((element) => {
                return element.title
                    .toLocaleUpperCase()
                    .includes(input.toLocaleUpperCase());
            })
        );
    }; //Filter Movie By Rating
    const filterByRate = (input) => {
        setMovie(
            movie.filter((element) => {
                return element.rate >= input;
            })
        );
    };

    return (
        <div id="total">
            <Header searchMethod={searchMovie} addNewMovie={addMovie} />
            <h1 className="sousTitre" style={{ marginTop: "8%" }}>
                {" "}
                MOVIES{" "}
            </h1>
            <Filter filter={filterByRate} />
            <MovieList movieList={movie} />
        </div>
    );
}

export default App;
