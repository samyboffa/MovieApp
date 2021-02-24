import React, { useState } from "react";
import "./MovieCard.css";
import { Star } from "./Star";

export const MovieCard = ({ movie }) => {
    let tab = [];
    for (let i = 0; i < movie.rate; i++) {
        tab.push(<Star key={i} hello="filled" />);
    }
    let tab2 = [];
    for (let i = 0; i < 5 - movie.rate; i++) {
        tab2.push(<Star key={movie.rate + i} hello="notFilled" />);
    }

    const [visibility, setVisibility] = useState("hidden");
    const changeVisibility = () =>
        visibility === "hidden"
            ? setVisibility("visible")
            : setVisibility("hidden");
    return (
        <div
            id="card"
            onMouseEnter={() => changeVisibility()}
            onMouseLeave={() => changeVisibility()}
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
