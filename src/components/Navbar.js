import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {

    const NavLinkStyles = ({isActive}) => {
        return {
            fontWeight : isActive ? 'bold' : 'normal',
            backgroundColor: isActive? 'beige' : null
        }
    }

    return (
        <nav className='primary-nav'>
            <NavLink  to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to='products'>Products</NavLink>
        </nav>
    );
}

export default Navbar;