import React, { Component } from 'react';

/*Stateless Functional Component , we are 
defining a function that returns a react component */

const NavBar = ({ totalCounters }) => { //destructuring so we dont have to use props over and over 
   
   
    return ( 
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
        Basic Counter <span className='badge badge-pill badge-secondary'>
        {totalCounters}</span>
        </a>
        </nav>
     );
};
 
export default NavBar;

