import React from "react";
import { Header } from "./Header";
import tvShowsList from "./AllSeries";
import movieLists from "./AllMovies";
import { back } from "./logos/logos";
import "./ItemDetail.css";
import { Link } from "react-router-dom";

export const ItemDetail = ({ match, movieOrTv }) => {
    let item = {};
    if (movieOrTv === "movies") {
        item = movieLists.find((item) => item.id === match.params.id);
    }
    if (movieOrTv === "tvshows") {
        item = tvShowsList.find((item) => item.id == match.params.id);
    }

    return (
        <div>
            <Header
                searchMethod=""
                addNewMovie=""
                tvShowOrMovie=""
                styleLoop="hidden"
            />
            <div className="movieItem">
                <div className="poster">
                    {" "}
                    <img src={item.poster} alt="" />
                </div>
                <div className="side">
                    <Link to={`/${movieOrTv}`}>
                        <div>{back}</div>
                    </Link>
                    <h1 className="title">
                        {item.title} <span className="year">({item.year})</span>
                    </h1>

                    <h3 className="overviewTitle"> Overview </h3>
                    <p className="overviewTextItem">{item.overview}</p>
                </div>
            </div>
        </div>
    );
};
