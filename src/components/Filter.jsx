import React, { useState, useEffect } from "react";
import "./Filter.css";

let eye = (
    <svg class="svg-icon" viewBox="0 0 20 20">
        <path d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z"></path>
    </svg>
);
export const Filter = (props) => {
    const [addedClass, setaddedClass] = useState({
        first: "",
        second: "",
        third: "",
        fourth: "",
        fifth: "",
    });
    let star = (
        <svg
            className="star"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
    );
    const [val, setval] = useState(1);
    return (
        <div className="filterBox">
            <h3 className="ff">BY RATE </h3>
            <p className="totalStars">
                <span
                    className="ss"
                    id={addedClass.first}
                    onClick={() => (
                        setval(1),
                        console.log(val),
                        setaddedClass({ first: "c1" })
                    )}
                >
                    {star}
                </span>
                <span
                    className="ss"
                    id={addedClass.second}
                    onClick={() => (
                        setval(2), setaddedClass({ first: "c1", second: "c2" })
                    )}
                >
                    {star}
                </span>
                <span
                    className="ss"
                    id={addedClass.third}
                    onClick={() => (
                        setval(3),
                        setaddedClass({
                            first: "c1",
                            second: "c2",
                            third: "c3",
                        })
                    )}
                >
                    {star}
                </span>
                <span
                    className="ss"
                    id={addedClass.fourth}
                    onClick={() => (
                        setval(4),
                        setaddedClass({
                            first: "c1",
                            second: "c2",
                            third: "c3",
                            fourth: "c4",
                        })
                    )}
                >
                    {star}
                </span>
                <span
                    className="ss"
                    id={addedClass.fifth}
                    onClick={() => (
                        setval(5),
                        setaddedClass({
                            first: "c1",
                            second: "c2",
                            third: "c3",
                            fourth: "c4",
                            fifth: "c5",
                        })
                    )}
                >
                    {star}
                </span>
            </p>
            <button
                className="filterBtn"
                onClick={() => (props.filter(val), setaddedClass(""))}
            >
                {" "}
                FILTER{" "}
            </button>
        </div>
    );
};
