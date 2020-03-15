import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <NavLink exact to="/">Game</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
        </div>
    );
};

export default Header;
