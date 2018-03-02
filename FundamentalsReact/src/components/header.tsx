import * as React from "react"; 
import { Link } from "react-router"; 

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <div><Link to="/about" className="btn btn-default">About</Link>
             <Link to ="/homepage" className="btn btn-default">Home</Link>
        </div>
        );

}