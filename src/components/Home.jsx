import React from "react";
import { Header } from "./Header";
import "./Home.css";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import tbbt from "./images/tbbt.jpg";
import twd from "./images/twd.jpg";
import viking from "./images/vikings.jpg";
import { back, next, facebook, github, youtube, twitter } from "./logos/logos";

export const Home = (styleLoop) => {
    return (
        <div>
            <Header styleLoop={styleLoop} />
            <CarouselProvider
                className="totalCarousel"
                naturalSlideWidth={100}
                naturalSlideHeight={30}
                totalSlides={3}
                interval={2500}
                isPlaying={true}
                infinite={true}
            >
                <Slider className="slides">
                    <Slide index={0}>
                        <img className="carItem" src={tbbt} alt="" />
                    </Slide>
                    <Slide index={1}>
                        <img className="carItem" src={twd} alt="" />
                    </Slide>
                    <Slide index={2}>
                        <img className="carItem" src={viking} alt="" />
                    </Slide>
                </Slider>
                <ButtonBack className="btnn btnBack">{back}</ButtonBack>
                <ButtonNext className="btnn btnNex">{next}</ButtonNext>
            </CarouselProvider>
            <footer>
                <hr></hr>
                <h4 className="createdBy"> Created By Sami Gharsallah</h4>
                <p className="mail">Samygharsallah@hotmail.com</p>
                <div className="iconLinks">
                    <a href="https://www.facebook.com/samy.boffa/">
                        {facebook}
                    </a>
                    <a href="https://github.com/samyboffa">{github}</a>
                    <a href="https://www.youtube.com/channel/UCb6U_IU9U-oXSAWzPOLyjig">
                        {youtube}
                    </a>
                    <a href="https://twitter.com/?lang=en">{twitter}</a>
                </div>
            </footer>
        </div>
    );
};
