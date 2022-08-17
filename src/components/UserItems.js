import React from "react";
import { Link } from 'react-router-dom'; 


const UserItems = (props) => {

    const { user } = props;

    return (
        <Link to={`/user/${user.username}`}>
            <span className="pl-2">{user.accountType}   </span>
            <span className="text-center">{user.username}</span>
            <br/>
        </Link>
    )
    
}

export default UserItems;