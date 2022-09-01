
import '../App.css';
import React from 'react';
import axios from 'axios';
import {addCourse} from '../api/apis'
//import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers';
import Input from '../components/Input';

export default class AddCourses extends React.Component{

    state = {
        name: null,
        type: null,
        code: null,
        time: null,
        room: null,
        lecturer: null,
        assistant: null,
        pending: false,
        errors: {}
    };


    handleChange = event => {
        const {name, value} = event.target;
        //const {accountType} = this.state;
        const errors = {...this.state.errors};
        errors[name] = undefined;
     
        this.setState({ 
            [name]: value,
            errors
        });
    };

    handleClick = async event => {
        event.preventDefault();
        let tempTime;
         const {name, type, code, time, room, lecturer, assistant} = this.state;
        /*const body = {
            username, 
            password
        }; */

     
        if(time === "8.40-9.30") tempTime = 1;
        else if(time === "9.40-10.30") tempTime = 2;
        else if(time === "10.40-11.30") tempTime = 3;
        else if(time === "11.40-12.30") tempTime = 4;
        else if(time === "13.30-14.20") tempTime = 5;
        else if(time === "14.30-15.20") tempTime = 6;
        else if(time === "15.30-16.20") tempTime = 7;
        else if(time === "16.30-17.20") tempTime = 8;
 
        const body = {
            name,
            type,
            code,
            time: tempTime,
            room,
            lecturer,
            assistant: null
        };
        
        console.log(body.time);
        const {push} = this.props.history;

       

        this.setState({pending: true});
        
        try{
            const response = await addCourse(body);
            push("/courses");
            
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
        const {pending, errors,} = this.state;
        const {name, type, code, time, room, lecturer, assistant} = errors;
        return(
            <div className='container'>
                <h1 className='text-center'>Add Course</h1>
                <br/>
                <form>
                <br/>
                    <Input name="name" label="Course Name" error={name} onChange={this.handleChange}/>
                    <br/>
                    <Input name="type" label="Course Type" error={type} onChange={this.handleChange}/>
                    <br/>
                    <Input name="code" label="Course Code" error={code} onChange={this.handleChange} />
                    
                    <label>Time</label>
                    <br/>
                    <div>
                        <select name="time" value={time} onChange={this.handleChange}>
                        <option value="8.40-9.30">8.40-9.30</option>
                        <option value="9.40-10.30">9.40-10.30</option>
                        <option value="10.40-11.30">10.40-11.30</option>
                        <option value="11.40-12.30">11.40-12.30</option>
                        <option value="13.30-14.20">13.30-14.20</option>
                        <option value="14.30-15.20">14.30-15.20</option>
                        <option value="15.30-16.20">15.30-16.20</option>
                        <option value="16.30-17.20">16.30-17.20</option>
                        </select>
                    </div>
                    <br/>
                    <Input name="room" label="Course Room" error={room} onChange={this.handleChange}/>
                    <br/>
                    <Input name="lecturer" label="Course Lecturer" error={lecturer} onChange={this.handleChange}/>
                    {/* <br/>
                    <Input name="assistant" label="Course Assitants" error={assistant} onChange={this.handleChange} /> */}
                    <br/>
                    <div className='text-center'>
                        <button className='btn btn-primary' onClick={this.handleClick} disabled={pending}>
                            {pending && <span className="spinner-border spinner-border-sm"></span>} Add Course</button>
                    </div>
                </form>
            </div>
            
        )
    }
}
