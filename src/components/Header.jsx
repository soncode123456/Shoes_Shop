import React from 'react';
import HeaderMenu from './HeaderMenu';

const Header = () => {
    return (
        // <header>
        //     <h1>My Shop</h1>
        //     <HeaderMenu />
        // </header>
        <header>
            <div>Header Content</div>
            <nav>
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kid</li>
                    <li>Sport</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
