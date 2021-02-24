import React, { useState, useEffect } from "react";
import "./MovieList.css";
import { Link } from "react-router-dom";
import { MovieCard } from "./MovieCard";
import { Filter } from "./Filter";
import { Header } from "./Header";

export const MovieList = ({
    tvShowOrMovies,
    tvShowOrMovie,
    dataList,
    match,
}) => {
    const [movie, setMovie] = useState(dataList); //taking the original list
    //add movie function
    const addMovie = (newMovie) => {
        setMovie([newMovie, ...movie]);
    };
    //Search Movie By name
    const searchMovie = (input) => {
        setMovie(
            dataList.filter((element) => {
                return element.title
                    .toLocaleUpperCase()
                    .includes(input.toLocaleUpperCase());
            })
        );
    };
    //filtering movie
    const filterByRate = (input) => {
        setMovie(
            movie.filter((element) => {
                return element.rate >= input;
            })
        );
    };
    useEffect(() => {
        setMovie(dataList);
    }, [match.path]);
    return (
        <div id="totalList">
            <Header
                searchMethod={searchMovie}
                addNewMovie={addMovie}
                tvShowOrMovie={tvShowOrMovie}
                styleLoop="visible"
            />
            <h1 className="sousTitre"> {tvShowOrMovies} </h1>
            <Filter filter={filterByRate} />
            <div id="list">
                {movie.length ? (
                    movie.map((movie, index) => (
                        <Link
                            style={{ textDecoration: "none" }}
                            to={`/${tvShowOrMovies}/${movie.id}`}
                        >
                            {" "}
                            <MovieCard key={index} movie={movie} />
                        </Link>
                    ))
                ) : (
                    <div className="noFound">
                        <h1> No movies found !!</h1>{" "}
                    </div>
                )}
            </div>
        </div>
    );
};
