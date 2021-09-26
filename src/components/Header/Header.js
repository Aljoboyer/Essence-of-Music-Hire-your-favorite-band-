import React from 'react';
import './Header.css';
import logo from '../../asset/image/band-logo-one.png'
const Header = () => {
    return (
        <div className="header">
            <div className="welcomediv">
            <div className="imgdib">
                <img className="img" src={logo} alt="" />
            </div>
            <div className="greeting">
                <h1 className="title">Welcome To Essence of Music</h1>
                <h3>Hire Your Favorite Music Band For Live Concert</h3>
                <h3>Total Budget 1000Million-$</h3>
            </div>
            </div>
            <nav>
                <a href="/">About us</a>
                <a href="/order">Contect us</a>
                <a href="/inventory">Hire Solo Musicians</a>
            </nav>
        </div>
    );
};

export default Header;