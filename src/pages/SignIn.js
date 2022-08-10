import React, { Component } from "react";
import Input from "../components/Input";
import { login } from "../api/apis";

class SignIn extends Component{
    state = {
        username: null,
        password: null
    }

    onChange = event => {
        const {name, value} = event.target;

    }

    onClick = event => {
        event.preventDefault();
        const { username, password } = this.state;
        const auths = {
            username,
            password
        }
        login(auths);
    }

    render(){
        return(
            <div className="container">
                <h1 className="text-center">Login</h1>
                <form>
                    <Input label="Username" name="username" onChange={this.onChange}/>
                    <Input label="Password" name="password" type="password" onChange={this.onChange}/>
                    <br/>
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={this.onClick}>Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;