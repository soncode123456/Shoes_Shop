import { NavLink } from 'react-router-dom';

const HeaderMenu = () => {
    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/search">Search</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
        </header>
    );
};

export default HeaderMenu;
