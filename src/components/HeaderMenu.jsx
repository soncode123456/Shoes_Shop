import { NavLink } from 'react-router-dom';
import React from 'react';

const HeaderMenu = () => {
    return (
        <>
            <div className="top d-flex p-3 justify-content-between align-items-center bg-dark text-white">
                <div className="left d-flex mx-md-4">
                    <NavLink to="/" className="nav-link me-2">
                        <h1 className="text-white">Logo</h1>
                    </NavLink>
                </div>
                <div className="right d-flex mx-md-5">
                    <NavLink to="/search" className="nav-link me-2 text-white">Search</NavLink>
                    <NavLink to="/cart" className="nav-link me-2 text-white">Cart</NavLink>
                    <NavLink to="/login" className="nav-link me-2 text-white">Login</NavLink>
                    <NavLink to="/register" className="nav-link me-2 text-white">Register</NavLink>
                </div>
            </div>
            <nav className="top d-flex p-3 px-5 bg-danger text-white">
                <NavLink to="/" className="nav-link me-5 text-white">Home</NavLink>
                <NavLink to="/Men" className="nav-link me-5 text-white">Men</NavLink>
                <NavLink to="/Women" className="nav-link me-5 text-white">Women</NavLink>
                <NavLink to="/Kid" className="nav-link me-5 text-white">Kid</NavLink>
                <NavLink to="/Sport" className="nav-link me-5 text-white">Sport</NavLink>
            </nav>
        </>
    );
};

export default HeaderMenu;
