import * as React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { AboutPage, DataDemo } from "./components"
import { App } from "./app";
import { LoginPageContainer } from "./components/login/loginPageContainer";
import { RegisterPageContainer } from "./components/register/registerPageContainer";
import { HomePageContainer } from "./components/homePage/index";

export const AppRouter: React.StatelessComponent<{}> = () => {

    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={RegisterPageContainer} />
                <Route path="/about" component={AboutPage} />
                <Route path="/memberhome" component={HomePageContainer} />
                <Route path="/login" component={LoginPageContainer} />
                <Route path="/register" component={RegisterPageContainer} />
                <Route path="/dataDemo" component={DataDemo} />
            </Route>
        </Router>
    )
}