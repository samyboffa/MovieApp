import React, { useState, useEffect } from "react";
import "./Filter.css";

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
            <h3>Filter By Rate : </h3>
            <p className="totalStars">
                <span
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
                    id={addedClass.second}
                    onClick={() => (
                        setval(2), setaddedClass({ first: "c1", second: "c2" })
                    )}
                >
                    {star}
                </span>
                <span
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
            <button className="filterBtn" onClick={() => props.filter(val)}>
                {" "}
                Filter{" "}
            </button>
        </div>
    );
};
