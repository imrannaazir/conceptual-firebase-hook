import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">Random Users</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <CustomLink to='/' className="nav-link" aria-current="page" href="#">Home</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to='/users' className="nav-link" href="#">Users</CustomLink>
                        </li>

                        <li className="nav-item">
                            <CustomLink to='/about' className="nav-link ">About</CustomLink>
                        </li>
                    </ul>
                    <div className="d-flex">

                        <Link to='/login'>    <button className="btn btn-outline-success mx-2" type="submit">Login</button></Link>
                        <Link to='/signup'>   <button className="btn btn-outline-success" type="submit">Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;