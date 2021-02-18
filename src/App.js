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
import { Filter } from "./components/Filter";

function App() {
    let movieList = [
        {
            title: "titanic",
            posterUrl: titanicPhoto,
            description: "Romance, Disaster",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Forrest Gump",
            posterUrl: forrestGumpPhoto,
            description: "Romance, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Pearl Harbor",
            posterUrl: PearlHarborPhoto,
            description: "Romance, War, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Gladiator",
            posterUrl: GladiatorPhoto,
            description: "historical, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Cast Away",
            posterUrl: castAwayPhoto,
            description: "survival, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Mask",
            posterUrl: maskPhoto,
            description: "Comedy",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Shawshank Redemption",
            posterUrl: shawshankRedemption,
            description: "Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Saving Private Ryan",
            posterUrl: savingPhoto,
            description: "Romance, War",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "titanic",
            posterUrl: titanicPhoto,
            description: "Romance, Disaster",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Forrest Gump",
            posterUrl: forrestGumpPhoto,
            description: "Romance, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Pearl Harbor",
            posterUrl: PearlHarborPhoto,
            description: "Romance, War, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Gladiator",
            posterUrl: GladiatorPhoto,
            description: "historical, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Cast Away",
            posterUrl: castAwayPhoto,
            description: "survival, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Mask",
            posterUrl: maskPhoto,
            description: "Comedy",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Shawshank Redemption",
            posterUrl: shawshankRedemption,
            description: "Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Saving Private Ryan",
            posterUrl: savingPhoto,
            description: "Romance, War",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "titanic",
            posterUrl: titanicPhoto,
            description: "Romance, Disaster",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Forrest Gump",
            posterUrl: forrestGumpPhoto,
            description: "Romance, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Pearl Harbor",
            posterUrl: PearlHarborPhoto,
            description: "Romance, War, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Gladiator",
            posterUrl: GladiatorPhoto,
            description: "historical, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Cast Away",
            posterUrl: castAwayPhoto,
            description: "survival, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Mask",
            posterUrl: maskPhoto,
            description: "Comedy",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Shawshank Redemption",
            posterUrl: shawshankRedemption,
            description: "Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Saving Private Ryan",
            posterUrl: savingPhoto,
            description: "Romance, War",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "titanic",
            posterUrl: titanicPhoto,
            description: "Romance, Disaster",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Forrest Gump",
            posterUrl: forrestGumpPhoto,
            description: "Romance, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Pearl Harbor",
            posterUrl: PearlHarborPhoto,
            description: "Romance, War, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Gladiator",
            posterUrl: GladiatorPhoto,
            description: "historical, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Cast Away",
            posterUrl: castAwayPhoto,
            description: "survival, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Mask",
            posterUrl: maskPhoto,
            description: "Comedy",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Shawshank Redemption",
            posterUrl: shawshankRedemption,
            description: "Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Saving Private Ryan",
            posterUrl: savingPhoto,
            description: "Romance, War",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "titanic",
            posterUrl: titanicPhoto,
            description: "Romance, Disaster",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Forrest Gump",
            posterUrl: forrestGumpPhoto,
            description: "Romance, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Pearl Harbor",
            posterUrl: PearlHarborPhoto,
            description: "Romance, War, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Gladiator",
            posterUrl: GladiatorPhoto,
            description: "historical, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Cast Away",
            posterUrl: castAwayPhoto,
            description: "survival, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Mask",
            posterUrl: maskPhoto,
            description: "Comedy",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Shawshank Redemption",
            posterUrl: shawshankRedemption,
            description: "Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Saving Private Ryan",
            posterUrl: savingPhoto,
            description: "Romance, War",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "titanic",
            posterUrl: titanicPhoto,
            description: "Romance, Disaster",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Forrest Gump",
            posterUrl: forrestGumpPhoto,
            description: "Romance, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Pearl Harbor",
            posterUrl: PearlHarborPhoto,
            description: "Romance, War, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Gladiator",
            posterUrl: GladiatorPhoto,
            description: "historical, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Cast Away",
            posterUrl: castAwayPhoto,
            description: "survival, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Mask",
            posterUrl: maskPhoto,
            description: "Comedy",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Shawshank Redemption",
            posterUrl: shawshankRedemption,
            description: "Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Saving Private Ryan",
            posterUrl: savingPhoto,
            description: "Romance, War",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "titanic",
            posterUrl: titanicPhoto,
            description: "Romance, Disaster",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Forrest Gump",
            posterUrl: forrestGumpPhoto,
            description: "Romance, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Pearl Harbor",
            posterUrl: PearlHarborPhoto,
            description: "Romance, War, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Gladiator",
            posterUrl: GladiatorPhoto,
            description: "historical, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Cast Away",
            posterUrl: castAwayPhoto,
            description: "survival, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Mask",
            posterUrl: maskPhoto,
            description: "Comedy",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Shawshank Redemption",
            posterUrl: shawshankRedemption,
            description: "Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Saving Private Ryan",
            posterUrl: savingPhoto,
            description: "Romance, War",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "titanic",
            posterUrl: titanicPhoto,
            description: "Romance, Disaster",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Forrest Gump",
            posterUrl: forrestGumpPhoto,
            description: "Romance, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Pearl Harbor",
            posterUrl: PearlHarborPhoto,
            description: "Romance, War, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Gladiator",
            posterUrl: GladiatorPhoto,
            description: "historical, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Cast Away",
            posterUrl: castAwayPhoto,
            description: "survival, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Mask",
            posterUrl: maskPhoto,
            description: "Comedy",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Shawshank Redemption",
            posterUrl: shawshankRedemption,
            description: "Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Saving Private Ryan",
            posterUrl: savingPhoto,
            description: "Romance, War",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "titanic",
            posterUrl: titanicPhoto,
            description: "Romance, Disaster",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Forrest Gump",
            posterUrl: forrestGumpPhoto,
            description: "Romance, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Pearl Harbor",
            posterUrl: PearlHarborPhoto,
            description: "Romance, War, Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Gladiator",
            posterUrl: GladiatorPhoto,
            description: "historical, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Cast Away",
            posterUrl: castAwayPhoto,
            description: "survival, drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Mask",
            posterUrl: maskPhoto,
            description: "Comedy",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "The Shawshank Redemption",
            posterUrl: shawshankRedemption,
            description: "Drama",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
        },
        {
            title: "Saving Private Ryan",
            posterUrl: savingPhoto,
            description: "Romance, War",
            rate: Math.floor(Math.random() * (6 - 1) + 1),
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
    const filterByRate = (input) => {
        setMovie(
            movie.filter((element) => {
                return element.rate >= input;
            })
        );
    };

    return (
        <div id="total">
            <Header />
            <SearchBar searchMethod={searchMovie} />
            <Filter filter={filterByRate} />
            <AddMovieForm addNewMovie={addMovie} />
            <MovieList movieList={movie} />
        </div>
    );
}

export default App;
