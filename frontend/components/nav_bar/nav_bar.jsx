import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between border-bottom">
            <Link className="nav-bar-brand" to="/">Todos</Link>
            <div className="nav nav-item">
                <Link className="nav-item nav-link border-left" to="/">Todos</Link>
                <Link className="nav-item nav-link border-left" to="/users">Users</Link>
                <Link className="nav-item nav-link border-left" to="/createtodo">Create Todo</Link>
            </div>
        </nav>
    )
};

export default NavBar;