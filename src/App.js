import React from "react";
import "./App.css";
import { MovieList } from "./components/MovieList";
import tvShowsList from "./components/AllSeries";
import movieLists from "./components/AllMovies";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ItemDetail } from "./components/ItemDetail";
function App() {
    return (
        <Router>
            <div id="total">
                <Switch>
                    <Route path="/" exact>
                        <Home styleLoop="hidden" />
                    </Route>
                    <Route
                        exact
                        path="/movies"
                        render={({ match }) => (
                            <MovieList
                                tvShowOrMovies="MOVIES"
                                tvShowOrMovie="ADD NEW MOVIE"
                                dataList={movieLists}
                                match={match}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/tvShows"
                        render={({ match }) => (
                            <MovieList
                                tvShowOrMovies="TVSHOWS"
                                tvShowOrMovie="ADD NEW TV SHOW"
                                dataList={tvShowsList}
                                match={match}
                            />
                        )}
                    />
                    <Route
                        path="/movies/:id"
                        render={({ match }) => (
                            <ItemDetail movieOrTv="movies" match={match} />
                        )}
                    />
                    <Route
                        path="/tvShows/:id"
                        render={({ match }) => (
                            <ItemDetail movieOrTv="tvshows" match={match} />
                        )}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
