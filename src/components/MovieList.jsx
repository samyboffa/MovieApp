import React from "react";
import "./MovieList.css";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ movieList }) => {
    return (
        <div id="list">
            {movieList.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </div>
    );
};
