import React from "react";
import "./MovieCard.css";

export const MovieCard = ({ movie }) => {
    return (
        <div id="card">
            <h3>{movie.title}</h3> <img src={movie.posterUrl} alt=""></img>
            <h4>{movie.description}</h4>
            <p>{movie.rate}</p>
        </div>
    );
};
