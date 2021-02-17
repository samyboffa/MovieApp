import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList";
import titanicPhoto from "./components/images/Titanic.jpg";
import forrestGumpPhoto from "./components/images/forrestGump.jpg";
import PearlHarborPhoto from "./components/images/PearlHarbor.jpg";
import GladiatorPhoto from "./components/images/gladiator.jpg";
import castAwayPhoto from "./components/images/castAway.jpg";
import shawshankRedemption from "./components/images/shawshank.jpg";
import maskPhoto from "./components/images/mask.jpg";
import savingPhoto from "./components/images/savingPrivateRyan.jpg";
import { AddMovieForm } from "./components/AddMovieForm";
import { SearchBar } from "./components/SearchBar";

function App() {
    let movieList = [
        {
            title: "titanic",
            posterUrl: titanicPhoto,
            description: "Romance, Disaster",
            rate: 5,
        },
        {
            title: "Forrest Gump",
            posterUrl: forrestGumpPhoto,
            description: "Romance, Drama",
            rate: 5,
        },
        {
            title: "Pearl Harbor",
            posterUrl: PearlHarborPhoto,
            description: "Romance, War, Drama",
            rate: 5,
        },
        {
            title: "Gladiator",
            posterUrl: GladiatorPhoto,
            description: "historical, drama",
            rate: 5,
        },
        {
            title: "Cast Away",
            posterUrl: castAwayPhoto,
            description: "survival, drama",
            rate: 5,
        },
        {
            title: "The Mask",
            posterUrl: maskPhoto,
            description: "Comedy",
            rate: 5,
        },
        {
            title: "The Shawshank Redemption",
            posterUrl: shawshankRedemption,
            description: "Drama",
            rate: 5,
        },
        {
            title: "Saving Private Ryan",
            posterUrl: savingPhoto,
            description: "Romance, War",
            rate: 5,
        },
        {
            title: "Saving Private Ryan",
            posterUrl: savingPhoto,
            description: "Romance, War",
            rate: 5,
        },
    ];
    const [movie, setMovie] = useState(movieList);
    const addMovie = (newMovie) => {
        setMovie([...movie, newMovie]);
    };

    const searchMovie = (input) => {
        setMovie(
            movieList.filter((element) => {
                return element.title
                    .toLocaleUpperCase()
                    .includes(input.toLocaleUpperCase());
            })
        );
    };

    return (
        <div id="total">
            <Header />
            <SearchBar searchMethod={searchMovie} />
            <AddMovieForm addNewMovie={addMovie} />
            <MovieList movieList={movie} />
        </div>
    );
}

export default App;
