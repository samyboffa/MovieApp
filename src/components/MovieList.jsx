import React from "react";
import "./MovieList.css";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ movieList }) => {
    return (
        <div id="list">
            {movieList.length ? (
                movieList.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))
            ) : (
                <div className="noFound">
                    <h1> No movies found !!</h1>{" "}
                </div>
            )}
        </div>
    );
};
