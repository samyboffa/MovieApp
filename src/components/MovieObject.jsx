import React from "react";
import titanicPhoto from "./images/Titanic.jpg";
import forrestGumpPhoto from "./images/forrestGump.jpg";
import PearlHarborPhoto from "./images/PearlHarbor.jpg";
import GladiatorPhoto from "./images/gladiator.jpg";
import castAwayPhoto from "./images/castAway.jpg";
import shawshankRedemption from "./images/shawshank.jpg";
import maskPhoto from "./images/mask.jpg";
import savingPhoto from "./images/savingPrivateRyan.jpg";
import sonwden from "./images/Snowden.jpg";

let movieList = [
    {
        title: "Snowden",
        posterUrl: sonwden,
        description: "Romance, War",
        rate: Math.floor(Math.random() * (6 - 1) + 1),
    },
    {
        title: "titanic",
        posterUrl: titanicPhoto,
        description: "Romance, Disaster",
        rate: Math.floor(Math.random() * (6 - 1) + 1),
    },
    {
        title: "Forrest Gump",
        posterUrl: forrestGumpPhoto,
        description: "Romance, Drama",
        rate: Math.floor(Math.random() * (6 - 1) + 1),
    },
    {
        title: "Pearl Harbor",
        posterUrl: PearlHarborPhoto,
        description: "Romance, War, Drama",
        rate: Math.floor(Math.random() * (6 - 1) + 1),
    },
    {
        title: "Gladiator",
        posterUrl: GladiatorPhoto,
        description: "historical, drama",
        rate: Math.floor(Math.random() * (6 - 1) + 1),
    },
    {
        title: "Cast Away",
        posterUrl: castAwayPhoto,
        description: "survival, drama",
        rate: Math.floor(Math.random() * (6 - 1) + 1),
    },
    {
        title: "The Mask",
        posterUrl: maskPhoto,
        description: "Comedy",
        rate: Math.floor(Math.random() * (6 - 1) + 1),
    },
    {
        title: "The Shawshank Redemption",
        posterUrl: shawshankRedemption,
        description: "Drama",
        rate: Math.floor(Math.random() * (6 - 1) + 1),
    },

    {
        title: "Saving Private Ryan",
        posterUrl: savingPhoto,
        description: "Romance, War",
        rate: Math.floor(Math.random() * (6 - 1) + 1),
    },
];

export default movieList;
