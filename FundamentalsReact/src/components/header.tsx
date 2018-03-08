import * as React from "react"; 
import { Link } from "react-router"; 

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <div><Link to="/about" className="btn btn-default">About</Link>
            <Link to="/memberhome" className="btn btn-default">Home</Link>
            <Link to="/login" className="btn btn-default">Login</Link>
            <Link to="/register" className="btn btn-default">Register</Link>
            <Link to="/dataDemo" className="btn btn-default">Data Demo</Link>
        </div>
        );

}