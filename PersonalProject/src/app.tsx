import * as React from "react";

export const App: React.StatelessComponent<{}> = (props) => {
    return (
        <div className="container">

            {props.children}
        </div>
    );
}