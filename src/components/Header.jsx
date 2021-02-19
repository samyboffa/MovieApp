import React, { useState } from "react";
import "./Header.css";
import logo from "./images/logo.png";

let loop = (
    <svg className="loop">
        <path
            d="M10.4,12.6C8,10.2,8,6.4,10.4,4c2.4-2.4,6.2-2.4,8.6,0c2.4,2.4,2.4,6.2,0,8.6C16.6,15,12.8,15,10.4,12.6
 M20.6,14.2c3.2-3.2,3.2-8.5,0-11.8c-3.2-3.2-8.5-3.2-11.8,0c-3.1,3.1-3.2,8-0.4,11.3L8,14.1l-0.9,0L0,21.3L1.7,23l7.2-7.2l0-0.9
 l0.4-0.4C12.5,17.4,17.5,17.3,20.6,14.2"
        ></path>{" "}
    </svg>
);
let ok = (
    <svg className="ok svg" viewBox="0 0 20 20">
        <path
            d="M7.197,16.963H7.195c-0.204,0-0.399-0.083-0.544-0.227l-6.039-6.082c-0.3-0.302-0.297-0.788,0.003-1.087
C0.919,9.266,1.404,9.269,1.702,9.57l5.495,5.536L18.221,4.083c0.301-0.301,0.787-0.301,1.087,0c0.301,0.3,0.301,0.787,0,1.087
L7.741,16.738C7.596,16.882,7.401,16.963,7.197,16.963z"
        ></path>
    </svg>
);
let quit = (
    <svg className="quit svg" viewBox="0 0 20 20">
        <path
            d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"
        ></path>
    </svg>
);

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
            <p>
                <img className="logo" src={logo} alt=""></img>
            </p>
            <div id="firstC">
                {" "}
                <h3>TV SHOWS</h3>
                <h3> MOVIES </h3>
                <div className="searchField">
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
                    ADD NEW MOVIE
                </h3>
                <div id="form" style={{ visibility: visibilityForm }}>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            let newMovie = {};
                            newMovie.title = e.target.titre.value;
                            newMovie.posterUrl = e.target.url.value;
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
            <div className="all" style={{ visibility: visibility }}>
                <input
                    autoFocus
                    placeholder="SEARCH FOR TITLE"
                    type="text"
                    onChange={(e) => (
                        setval(e.target.value),
                        props.searchMethod(e.target.value)
                    )}
                />
                <span
                    className="svg"
                    onClick={() => (
                        props.searchMethod(val), setvisibility("hidden")
                    )}
                >
                    {ok}
                </span>{" "}
                <span className="svg" onClick={() => setvisibility("hidden")}>
                    {quit}
                </span>
            </div>
        </div>
    );
};
