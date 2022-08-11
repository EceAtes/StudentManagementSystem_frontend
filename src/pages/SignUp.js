
import '../App.css';
import React from 'react';
import {signUpApi} from '../api/apis'
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
//import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import Input from '../components/Input';

export default class SignUp extends React.Component{

    state = {
        username: null,
        password: null,
        passwordCheck: null,
        pending: false,
        errors: {}
    };


    handleChange = event => {
        const {name, value} = event.target;
        const errors = {...this.state.errors};
        errors[name] = undefined;

        if(name === 'password' || name === 'passwordCheck'){
            if(name === 'password' && value !== this.state.passwordCheck){
                errors.passwordCheck = 'Passwords don nott match';
            } else if( name === 'passwordCheck' && value !== this.state.password) {
                errors.passwordCheck = 'Passwords do not match';
            } else {
                errors.passwordCheck = undefined;
            }
        }

        this.setState({ 
            [name]: value,
            errors
        });

    };

    handleClick = async event => {
        event.preventDefault();
        /* const {username, password} = this.state;
        const body = {
            username, 
            password
        }; */

        const body = {
            username: this.state.username,
            password: this.state.password
        };
        this.setState({pending: true});

        try{
            const response = await signUpApi(body);
        }catch (error){
            if(error.response.data.validationErr){
                this.setState({
                    errors: error.response.data.validationErr
                });
            }
        }

        this.setState({pending: false});

        /* signUpApi(body)
            .then(response => {
                this.setState({pending: false});
            })
            .catch(error => {
                this.setState({pending: false});
            }); */
    
    };

    render(){
        const {pending, errors} = this.state;
        const {username, password, passwordCheck} = errors;
        return(
            <div className='container'>
                <h1 className='text-center' >Sign Up</h1>
                <br/>
                <form>
                    <Input name="username" label="Username" error={username} onChange={this.handleChange}/>
                    <Input name="password" label="Password" error={password} onChange={this.handleChange} type="password"/>
                    <Input name="passwordCheck" label="Password Again" error={passwordCheck} onChange={this.handleChange} type="password"/>
                    {/* <div className='text-center'>
                        <label>Password</label>
                        <input className={password ? 'form-control is-invalid' : 'form-control'} type="password" name = "password" onChange={this.handleChange} />
                        <div className='invalid-feedback'>{password}</div>
                    </div> */}
                    {/* <div className='text-center'>
                        <label>Password Again</label>
                        <input className='form-control'type="password" name = "passwordCheck" onChange={this.handleChange} />
                    </div> */}
                    <br/>
                    <p></p>
                    <div className='text-center'>
                        <button className='btn btn-primary' onClick={this.handleClick} disabled={pending || passwordCheck !== undefined}>
                            {pending && <span className="spinner-border spinner-border-sm"></span>} Sign Up</button>
                    </div>
                </form>
            </div>
            
        )
    }
}
