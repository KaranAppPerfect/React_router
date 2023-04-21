import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Products = () => {
    return (
        <>
            <br/>

            <div>
                <input type='text' placeholder="Search Products"></input>
            </div>
            <br/>


            <nav className='secondary-nav'> 
                <NavLink to='featured'> Featured </NavLink>
                <NavLink to='new'> New </NavLink>
            </nav>

            <Outlet/>
            
        </>
    );
};

export default Products;