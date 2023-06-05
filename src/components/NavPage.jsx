import React from 'react';
import HomePage from './HomePage';

import '../cssfiles/navpage.css'

const NavPage = () => {
    return (
        <div>
            <div className='main-navbar'>
                <div className='navbar-logo'>
                    <span className='navbar-logo-item'> To Do List </span>
                </div>
                <div className='navbar-items-container'>
                    <ul>
                        <li>Home</li>
                    </ul>
                </div>


            </div>
            <HomePage />
        </div >
    );
}

export default NavPage;
