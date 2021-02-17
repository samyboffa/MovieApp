import React, { useState } from "react";
import "./AddMovieForm.css";

export const AddMovieForm = (props) => {
    const [affichage, setAffichage] = useState("none");
    const changerAffichage = () => {
        affichage == "none" ? setAffichage("block") : setAffichage("none");
    };
    let newMovie = {};

    const [newM, setNewM] = useState({ hello: "hello" });

    return (
        <div id="form">
            <button className="add" onClick={changerAffichage}>
                {" "}
                Add Movie
            </button>
            <form
                style={{ display: affichage }}
                onSubmit={(e) => {
                    e.preventDefault();
                    changerAffichage();

                    /*newMovie.title = e.target.titre.value;
                    newMovie.posterUrl = e.target.url.value;
                    newMovie.description = e.target.description.value;
                    newMovie.rate = e.target.rating.value;*/
                    setNewM({
                        title: e.target.titre.value,
                        posterUrl: e.target.url.value,
                        description: e.target.description.value,
                        rate: e.target.rating.value,
                    });
                    props.addNewMovie(newM);
                    console.log(newM);
                    console.log(newMovie);
                }}
            >
                <label> Film Title : </label>
                <input type="text" name="titre" required />
                <label> Film Description : </label>
                <input type="text" name="description" required />
                <label> Film Poster URL : </label>
                <input type="text" name="url" required />
                <label> Film Rating : </label>
                <input type="number" min="1" max="5" name="rating" required />
                <input type="submit" value="Valider" />
                {console.log(newM)};
            </form>
        </div>
    );
};
