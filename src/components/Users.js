import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';

const Users = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const isActive = searchParams.get('filter') === 'active';

    return (
    
        <> 
            <ol className='secondary-nav'>
                <li> <NavLink to='1'>User 1</NavLink> </li>
                <li> <NavLink to='2'>User 2</NavLink> </li>
                <li> <NavLink to='3'>User 3</NavLink> </li>
            </ol>

            <button onClick={()=> setSearchParams({filter: 'active'})}> Show active </button>
            <button onClick={() => setSearchParams({})}> Reset Filter </button>

            <h1> {isActive? "Showing Active Users" : "Showing All Users" } </h1>

        </>
    );
};

export default Users;