import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user: { name, email, id } }) => {
    return (
        <div className="card col-4">

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Email: {email}</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={`user/${id}`} className="btn btn-primary">Go somewhere</Link>
            </div>

        </div>
    )
};

export default User;