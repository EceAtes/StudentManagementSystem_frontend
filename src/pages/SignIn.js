import React, { Component } from "react";
import Input from "../components/Input";
import { login } from "../api/apis";

class SignIn extends Component{
    state = {
        username: null,
        password: null,
        error: null,
        pending: false
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
        const { signInSuccess } = this.props;
        const creds = {
            username,
            password
        }
        const {push} = this.props.history;

        this.setState({
            error: null,
            pending: true
        })
        try{
            await login(creds);
            push("/");
            signInSuccess(username);
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
        const {pending} = this.state;
        return(
            <div className="container">
                <h1 className="text-center">Login</h1>
                <form>
                    <Input label="Username" name="username" onChange={this.onChange}/>
                    <Input label="Password" name="password" type="password" onChange={this.onChange}/>
                    {this.state.error && (<div className="alert alert-danger">
                        Username or password is invalid
                    </div>)}
                    <br/>
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={this.onClickLogin} disabled={pending}>
                        {pending && <span className="spinner-border spinner-border-sm"></span>} Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;