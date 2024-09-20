import { NavLink } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectTotalItems } from '../redux/slices/cartSlice'; // Import selector

const HeaderMenu = () => {
  const totalItems = useSelector(selectTotalItems); // Lấy tổng số lượng từ Redux store

  return (
    <>
      <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="left d-flex mx-md-4">
          <NavLink to="/" className="nav-link me-2">
            <h1 className="text-white">Logo</h1>
          </NavLink>
        </div>
        <div className="right d-flex mx-md-5">
          <NavLink to="/search" className="nav-link me-2 text-white">Search</NavLink>
          <NavLink to="/cart" className="nav-link me-2 text-white">
          <i class="fa-solid fa-cart-shopping"></i>
            <span>({totalItems})</span> {/* Hiển thị số lượng sản phẩm */}
          </NavLink>
          <NavLink to="/login" className="nav-link me-2 text-white">Login</NavLink>
          <NavLink to="/register" className="nav-link me-2 text-white">Register</NavLink>
        </div>
      </nav>
      <nav className="top d-flex p-3 px-5 bg-danger text-white">
        <NavLink to="/" className="nav-link me-5 text-white">Home</NavLink>
        <NavLink to="#" className="nav-link me-5 text-white">Men</NavLink>
        <NavLink to="#" className="nav-link me-5 text-white">Women</NavLink>
        <NavLink to="#" className="nav-link me-5 text-white">Kid</NavLink>
        <NavLink to="#" className="nav-link me-5 text-white">Sport</NavLink>
      </nav>
    </>
  );
};

export default HeaderMenu;
