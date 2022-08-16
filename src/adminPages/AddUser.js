
import '../App.css';
import React from 'react';
import {signUpApi} from '../api/apis'
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
//import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import Input from '../components/Input';

export default class AddUser extends React.Component{

    state = {
        accountType: "",
        name: null,
        surname: null,
        email: null,
        username: null,
        usernameDecided: null,
        password: null,
        pending: false,
        errors: {}
    };


    handleChange = event => {
        const {name, value} = event.target;
        const {accountType} = this.state;
        const errors = {...this.state.errors};
        errors[name] = undefined;
        
        if(name === "username" && accountType === "Öğrenci"){
            console.log("entered");
            if(isNaN(value)){
                errors.username = 'Username must be a number for students';
            } else{
                errors.username = undefined;
            }
        } 

        if(name==="username" && (accountType === "Görevli" || accountType === "Asistan")){
            const trueValue = `${this.state.name}.${this.state.surname}`;
            console.log(trueValue);
            if(value === trueValue){
                errors.username = undefined;
            } else{
                errors.username = 'For assistants and lecturers the username must be in the format of "name.surname"';
            }
        }
        /*
        if(name === 'password' || name === 'passwordCheck'){
            if(name === 'password' && value !== this.state.passwordCheck){
                errors.passwordCheck = 'Passwords don not match';
            } else if( name === 'passwordCheck' && value !== this.state.password) {
                errors.passwordCheck = 'Passwords do not match';
            } else {
                errors.passwordCheck = undefined;
            }
        }*/

        
        this.setState({ 
            [name]: value,
            errors
        });
    };

    generatePassword = () => {
        let generatePassword = "";
        var characters = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*?";

        for (var i = 0; i < 10; i++) {
            generatePassword += characters.charAt(
            Math.floor(Math.random() * characters.length)
            );
        } 
        return generatePassword;
    }

    handleClick = async event => {
        event.preventDefault();
        /* const {username, password} = this.state;
        const body = {
            username, 
            password
        }; */

        let genPassword = this.generatePassword();
        console.log(genPassword);

        const body = {
            accountType: this.state.accountType,
            username: this.state.username,
            password: genPassword
        };
        
        console.log(body.password);
        const {push} = this.props.history;

        

        this.setState({pending: true});
        
        try{
            const response = await signUpApi(body);
            push("/signin");
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
        const {username, password, passwordCheck, email, name, surname, accountType} = errors;
        let usernamePlaceHolder = "";
        return(
            <div className='container'>
                <h1 className='text-center' >Sign Up</h1>
                <br/>
                <form>
                    <label>Account Type</label>
                    <br/>
                    <div>
                        <select value={accountType} defaultChecked="Admin" name="accountType" onChange={this.handleChange}>
                        <option value="">--Choose--</option>
                        <option value="Admin">Admin</option>
                        <option value="Öğrenci">Öğrenci</option>
                        <option value="Asistan">Asistan</option>
                        <option value="Görevli">Öğretim Görevlisi</option>
                        </select>
                    </div>
                    <br/>
                    <Input name="name" label="Name" error={name} onChange={this.handleChange}/>
                    <br/>
                    <Input name="surname" label="Surname" error={surname} onChange={this.handleChange}/>
                    <br/>
                    <Input name="email" label="Email" error={email} onChange={this.handleChange} />
                    <br/>
                    <div className="form-group">
                        <label>Username</label>
                        <input className = {username ? 'form-control is-invalid' : 'form-control'} name = "username" onChange={this.handleChange} />
                        <div className="invalid-feedback">{username}</div>
                    </div>

                    {/* if(accountType === "Admin" || accountType === "Öğrenci" ){
                        <Input name="username" label="Username" error={passwordCheck} onChange={this.handleChange} type="password"/>
                    } else if (accountType === "Görevli" || accountType === "Asistan"){
                        <div className="form-group">
                            <label>Username</label>
                            <input disabled="true" className='form-control' name = "username" onChange={this.handleChange} placeholder={(name === null || surname === null)? "" : name + "." + surname}/>
                        </div>     
                    } else{
                        <div className="form-group">
                            <label>Username</label>
                            <input disabled="true" className='form-control' name = "username" onChange={this.handleChange} placeholder={(name === null || surname === null)? "" : name + "." + surname}/>
                        </div>
                    } */}
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
                        <button className='btn btn-primary' onClick={this.handleClick} disabled={pending || passwordCheck !== undefined || accountType === null}>
                            {pending && <span className="spinner-border spinner-border-sm"></span>} Sign Up</button>
                    </div>
                </form>
            </div>
            
        )
    }
}
