import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./images/logo.png";
import { loop, ok, quit } from "./logos/logos";

export const Header = (props) => {
    const [visibility, setvisibility] = useState("hidden");
    const [val, setval] = useState("");
    const [visibilityForm, setvisibilityForm] = useState("hidden");
    const changeVisibility = (el) => {
        el == "visible"
            ? setvisibilityForm("hidden")
            : setvisibilityForm("visible");
    };

    return (
        <div id="head">
            <Link to="/">
                <p>
                    <img className="logo" src={logo} alt=""></img>
                </p>
            </Link>
            <div id="firstC">
                {" "}
                <Link className="links" to="/tvShows">
                    {" "}
                    <h3>TV SHOWS</h3>{" "}
                </Link>
                <Link className="links" to="/movies">
                    {" "}
                    <h3> MOVIES </h3>
                </Link>
                <div
                    style={{ visibility: props.styleLoop.styleLoop }}
                    className="searchField"
                >
                    <p
                        className="loopp"
                        onClick={() => setvisibility("visible")}
                    >
                        {" "}
                        {loop}
                    </p>
                </div>{" "}
            </div>
            <div className="addNew">
                <h3 onClick={() => changeVisibility(visibilityForm)}>
                    {props.tvShowOrMovie}
                </h3>
                <div id="form" style={{ visibility: visibilityForm }}>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            let newMovie = {};
                            newMovie.id = Math.floor(Math.random() * 2000);
                            newMovie.title = e.target.titre.value;
                            newMovie.poster = e.target.url.value;
                            newMovie.description = e.target.description.value;
                            newMovie.rate = e.target.rating.value;
                            props.addNewMovie(newMovie);
                            setvisibilityForm("hidden");
                        }}
                    >
                        <label> Film Title : </label>
                        <input
                            type="text"
                            name="titre"
                            required
                            placeholder="Movie Title"
                        />
                        <label> Film Description : </label>
                        <input
                            type="text"
                            name="description"
                            required
                            placeholder="Drama, Horror..."
                        />
                        <label> Film Poster URL : </label>
                        <input
                            type="text"
                            name="url"
                            required
                            placeholder="HTTP//..."
                        />
                        <label> Film Rating : </label>
                        <input
                            placeholder="1 to 5"
                            type="number"
                            min="1"
                            max="5"
                            name="rating"
                            required
                        />
                        <input type="submit" value="Valider" />
                        <input
                            type="button"
                            value="Cancel"
                            onClick={() => setvisibilityForm("hidden")}
                        />
                    </form>
                </div>
            </div>
            <div
                className="all"
                style={{ visibility: visibility /*The Opaque Block*/ }}
            >
                <div className="searching">
                    <input
                        className="inputSearch"
                        autoFocus
                        placeholder="Search for title..."
                        type="text"
                        onChange={(e) => (
                            setval(e.target.value),
                            props.searchMethod(e.target.value)
                        )}
                    />
                    <div className="quitok">
                        <span
                            className="svg"
                            onClick={() => (
                                props.searchMethod(val), setvisibility("hidden")
                            )}
                        >
                            {ok}
                        </span>{" "}
                        <span
                            className="svg"
                            onClick={() => setvisibility("hidden")}
                        >
                            {quit}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
