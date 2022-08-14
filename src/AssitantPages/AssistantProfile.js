import React, { Component } from "react";
import Input from "../components/Input";
import { login } from "../api/apis";

class AssistantProfile extends Component{
    state = {
        username: null
    }

    onChange = event => {
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

    render(){
        const {pending, username} = this.state;
        return(
            <div className="container">
                <h1>Hello, {username}</h1>
                <button className='btn btn-primary' onClick={this.handleClick}>Edit courses</button>
                <button className='btn btn-primary' onClick={this.handleClick}>List all courses</button>
            </div>
        )
    }
}

export default SignIn;