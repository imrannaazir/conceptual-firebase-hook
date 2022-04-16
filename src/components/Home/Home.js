import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';
import User from '../User/User';

const Home = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const users = useUsers(url)
    if (users.length > 4) {
        users.length = 4
    }

    return (
        <div className='row container mx-auto gy-4'>
            {
                users.map(user => <User key={user.id} user={user} />)
            }
            <Link to='/users'>See more...</Link>
        </div>
    );
};

export default Home;