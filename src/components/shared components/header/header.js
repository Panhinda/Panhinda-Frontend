import React from 'react';
import { Link,Redirect,NavLink} from 'react-router-dom';
import './header.css';
const NavBar = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'><NavLink to="/dashboard" style={{ textDecoration: 'none',color:'white' }}>Home</NavLink></div>
        <div className='navbar__item'>About Us</div>
         <div className='navbar__item'><NavLink to="/" style={{ textDecoration: 'none',color:'white' }}>Log out</NavLink></div> 
        
    </header>
);

export default NavBar;