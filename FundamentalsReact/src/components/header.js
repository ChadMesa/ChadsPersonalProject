import * as React from "react";
import { Link } from "react-router";
export const Header = () => {
    return (React.createElement("div", null,
        React.createElement(Link, { to: "/about", className: "btn btn-default" }, "About"),
        React.createElement(Link, { to: "/memberhome", className: "btn btn-default" }, "Home"),
        React.createElement(Link, { to: "/login", className: "btn btn-default" }, "Login"),
        React.createElement(Link, { to: "/register", className: "btn btn-default" }, "Register"),
        React.createElement(Link, { to: "/dataDemo", className: "btn btn-default" }, "Data Demo")));
};
//# sourceMappingURL=header.js.map