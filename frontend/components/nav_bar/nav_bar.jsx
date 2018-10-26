import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <div>
                <Link to="/">Todos</Link>
            </div>

            <div>
                <Link to="/">Todos</Link>
                <Link to="/users">Users</Link>
                <Link to="/createtodo">Create Todo</Link>
            </div>
        </nav>
    )
};

export default NavBar;