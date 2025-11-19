import React from 'react';
import { NavLink } from 'react-router';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>This is Header</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/users">Writers</NavLink>
                <NavLink to="/emails">Emails</NavLink>
            </nav>
        </div>
    );
};

export default Header;