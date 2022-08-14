import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render(){
        return(
            <div className='shadow-sm navbar-light'>
                <nav className='navbar bg-light container navbar-expand'>
                    <Link className='navbar-brand' to="/">
                        Student Management System
                    </Link>

                    <ul className='navbar-nav ml'>
                        <li>
                            <Link className='nav-link' to='/signin'>
                                Login
                            </Link> 
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;