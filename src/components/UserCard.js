import React from "react";
import { withRouter } from "react-router-dom";

const UserCard = props => {
    const pathUser = props.match.params.username;
    const loggedUser = props.username;
    //console.log(pathUser);
   // console.log(loggedUser);
    let message = "Cannot edit";
    if(loggedUser === pathUser){
        message = "Can edit";
    }
    return <div>{message}</div>
}

export default withRouter(UserCard); 