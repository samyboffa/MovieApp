import React from "react";
import "./SearchBar.css";

export const SearchBar = (props) => {
    return (
        <input
            type="text"
            id="search"
            placeholder="SEARCH"
            onChange={(e) => props.searchMethod(e.target.value)}
        />
    );
};
