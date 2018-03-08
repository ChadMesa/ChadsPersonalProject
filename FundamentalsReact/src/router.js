import * as React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { AboutPage, DataDemo } from "./components";
import { App } from "./app";
import { LoginPageContainer } from "./components/login/loginPageContainer";
import { RegisterPageContainer } from "./components/register/registerPageContainer";
import { HomePageContainer } from "./components/homePage/index";
export const AppRouter = () => {
    return (React.createElement(Router, { history: browserHistory },
        React.createElement(Route, { path: "/", component: App },
            React.createElement(IndexRoute, { component: RegisterPageContainer }),
            React.createElement(Route, { path: "/about", component: AboutPage }),
            React.createElement(Route, { path: "/memberhome", component: HomePageContainer }),
            React.createElement(Route, { path: "/login", component: LoginPageContainer }),
            React.createElement(Route, { path: "/register", component: RegisterPageContainer }),
            React.createElement(Route, { path: "/dataDemo", component: DataDemo }))));
};
//# sourceMappingURL=router.js.map