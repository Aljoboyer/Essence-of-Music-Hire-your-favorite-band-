import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            
            <nav>
                <a href="/">About us</a>
                <a href="/order">Contect us</a>
                <a href="/inventory">Hire Solo Musicians</a>
            </nav>
        </div>
    );
};

export default Header;