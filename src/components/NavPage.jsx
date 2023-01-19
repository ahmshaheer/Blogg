import React from 'react';
import HomePage from './HomePage';
import '../cssfiles/navpage.css'
import SearchIcon from "../pics/search.svg";

const NavPage = () => {
    return (
        <div>
            <div className='main-navbar'>
                <div className='navbar-logo'>
                    <span className='navbar-logo-item'> Blogg </span>
                </div>
                <div className='navbar-items-container'>
                    <ul>
                        <li>Home</li>
                        <li>Login</li>
                    </ul>
                </div>

                <div className='navbar-search'>
                    <input type='text' placeholder='Search' />
                    <img className='searchIcon' src={SearchIcon} alt='SearchIcon' />
                </div>
            </div>
            <HomePage />
        </div >
    );
}

export default NavPage;
