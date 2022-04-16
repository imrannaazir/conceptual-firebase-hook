import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import User from '../User/User';

const Users = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const users = useUsers(url)


    return (
        <div className='row container mx-auto gy-4'>
            {
                users.map(user => <User key={user.id} user={user} />)
            }
            <Link to='/users'>See more...</Link>
        </div>
    );
};

export default Users;