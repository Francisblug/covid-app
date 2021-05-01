import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav">
            <h1>Covid App</h1>
            <ul>
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link to="/liveData">Live Data</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
