import * as React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { AboutPage, HomePage } from "./components";
import { App } from "./app";

export const AppRouter: React.StatelessComponent<{}> = () => {

    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={AboutPage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/homepage" component={HomePage} />
            </Route>
        </Router>
    )
}