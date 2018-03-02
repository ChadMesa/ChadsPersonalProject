import * as React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { AboutPage } from "./components";
import { App } from "./app";
import { HomePage } from "./components";
export const AppRouter = () => {
    return (React.createElement(Router, { history: browserHistory },
        React.createElement(Route, { path: "/", component: App },
            React.createElement(IndexRoute, { component: AboutPage }),
            React.createElement(Route, { path: "/about", component: AboutPage }),
            React.createElement(IndexRoute, { component: HomePage }),
            React.createElement(Route, { path: "/homepage", component: HomePage }))));
};
//# sourceMappingURL=router.js.map