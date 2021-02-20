import React, { useState } from "react";
import "./MovieCard.css";
import { Star } from "./Star";

export const MovieCard = ({ movie }) => {
    let tab = [];
    let x = Math.floor(Math.random() * (6 - 1) + 1);
    for (let i = 0; i < movie.rate; i++) {
        tab.push(<Star key={i} hello="filled" />);
    }
    let tab2 = [];
    for (let i = 0; i < 5 - movie.rate; i++) {
        tab2.push(<Star key={movie.rate + i} hello="notFilled" />);
    }

    const [visibility, setVisibility] = useState("hidden");
    return (
        <div
            id="card"
            onMouseLeave={() => setVisibility("hidden")}
            onMouseEnter={() => setVisibility("visible")}
        >
            <img src={movie.poster} alt=""></img>
            <h3>{movie.title}</h3>
            <p className="stars">
                {tab}
                {tab2}{" "}
            </p>{" "}
            <div style={{ visibility: visibility }} className="overview">
                {" "}
                <span className="overviewText">{movie.overview}</span>{" "}
            </div>
        </div>
    );
};
