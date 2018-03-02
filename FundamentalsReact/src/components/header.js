import * as React from "react";
import { Link } from "react-router";
export const Header = () => {
    return (React.createElement("div", null,
        React.createElement(Link, { to: "/about", className: "btn btn-default" }, "About"),
        React.createElement(Link, { to: "/homepage", className: "btn btn-default" }, "Home")));
};
//# sourceMappingURL=header.js.map