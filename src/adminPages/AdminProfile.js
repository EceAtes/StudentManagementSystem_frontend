import React, { Component } from "react";
//import {Routes, Route, useNavigate} from 'react-router-dom'
import Input from "../components/Input";
import { login } from "../api/apis";
import UserCard from "../components/UserCard";

/* const AdminProfile = () => {
    return(
        <div className="container">
            <UserCard />
        </div>
    );
};

export default AdminProfile; */

 class AdminProfile extends Component{
    /* state = {
        username: null
    }*/

    handleNewUser = () => {
        const {push} = this.props.history;
        push("/adduser");
    }

    handleUserList = () => {
        const {push} = this.props.history;
        push("/userlist");
    }
    /*onChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
            error: null
        })
    }

    onClickLogin = async event => {
        event.preventDefault();
        const { username, password } = this.state;
        const creds = {
            username,
            password
        }
        this.setState({
            error: null,
            pending: true
        })
        try{
            await login(creds);
        } catch(apiError){
            this.setState({
                error: apiError.response.data.message
            })
        }
        this.setState({
            pending: false
        })
    }
 */
    render(){
        //npmconst {pending } = this.state;
        const { username } = this.props;
        return(
            <div className="container">
                <p>ADMIN</p>
                <UserCard username={username}/>
                <p>{}</p>
                <br/>
                <h1>Hello, {username}</h1>
                <br/>
                <br/>
                <button className='btn btn-primary' onClick={this.handleClick} >Add New Course</button>
                <br/>
                <br/>
                <button className='btn btn-primary' onClick={this.handleNewUser} >Add new user</button>
                <br/>
                <br/>
                <button className='btn btn-primary' onClick={this.handleUserList}>See all users</button>
                <br/>
                <br/>
                <button className='btn btn-primary' onClick={this.handleClick}>Edit courses</button>
                <br/>
                <br/>
                <button className='btn btn-primary' onClick={this.handleClick}>List all courses</button>
            </div>
        )
    }
}

export default AdminProfile; 