import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    render(){
        const {isLoggedIn, username, logoutSuccess} = this.props;
        let links = (
            <ul className='navbar-nav ml-auto'>
                <li>
                    <Link className='nav-link' to='/signin'>
                        Login
                    </Link> 
                </li>
            </ul>
        );
        console.log("isLoggedIn:" + isLoggedIn);

        if(isLoggedIn){
            links = (
                <ul className='navbar-nav ml-auto'>
                    <li> 
                        <Link className='nav-link' to={'/user/' + username}>
                            {username}
                        </Link>
                    </li>
                    <li className='nav-link' onClick={logoutSuccess} style={{cursor: 'pointer'}}>
                        Logout
                    </li>
                </ul>
            );
        }

        return(
            <div className='shadow-sm navbar-light'>
                <nav className='navbar bg-light container navbar-expand'>
                    <Link className='navbar-brand' to="/">
                        Student Management System
                    </Link>        
                    {links}            
                </nav>
            </div>
        );
    }
}

export default NavBar;