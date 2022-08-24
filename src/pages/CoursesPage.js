import React, { Component, useEffect, useState } from "react";
import Input from "../components/Input";
import { login } from "../api/apis";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import EditPage from "./EditPage";

//value={time}  onChange={this.handleChange}


 const CoursesPage = props => {
    let prevName = "Intro to CS";//databaseden gelecek
    const [editMode, setEditMode] = useState(false);
    //const [updated, setUpdated] = useState();
    const [name, setName] = useState("Intro to CS");
    const [type, setType] = useState("Mandatory");
    const [code, setCode] = useState("CS101");
    const [time, setTime] = useState("9.30 - 10.20");
    const [room, setRoom] = useState("AA1");
    const [lecturer, setLecturer] = useState("A B");
    const [assistant, setAssistant] = useState("None");
    
    const handleChange = event => {
       const{ name, value } = event.target;
       this.setState({
        [name]: value
       });
    };

    /*
    useEffect(() => {
        if(!editMode){
            setName(undefined);
        } else{
            setName("Intro to CS");
        }
    }, [editMode, name ])*/


    const handleSave = event => {
        /*setName(event.target.value);*/
        console.log(name);
        setEditMode(false);
    }


    const handleDelete = event => {
        setEditMode(false);
    }


        console.log(editMode);
        return(
            <div className="container">
                <h1>Courses</h1>
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Code</th>
                    <th scope="col">Time</th>
                    <th scope="col">Room</th>
                    <th scope="col">Teacher</th>
                    <th scope="col">Assistant(s)</th>
                    <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                {!editMode && (
                    <>
                        <tr>
                        <th scope="row">{name}</th>
                        <td>{type}</td>
                        <td>{code}</td>
                        <td>{time}</td>
                        <td>{room}</td>
                        <td>{lecturer}</td>
                        <td>{assistant}</td>
                        <td>
                            <button className="btn btn-success d-inline-flex" onClick={() => setEditMode(true)} > Edit </button>
                        </td>
                        </tr>
                    </>
                )}
                {editMode && (
                    <>
                        <tr>
                        <th scope="row"><input name="name" defaultValue={name} onChange={(event) => {setName(event.target.value)}}/>{name}</th>
                        <td> <input name="type" defaultValue={type} /></td>
                        <td><input name="code" defaultValue={code} /></td>
                        <td>
                        <select name="time" >
                            <option value="1">8.40-9.30</option>
                            <option value="2">9.40-10.30</option>
                            <option value="3">10.40-11.30</option>
                            <option value="4">11.40-12.30</option>
                            <option value="5">13.30-14.20</option>
                            <option value="6">14.30-15.20</option>
                            <option value="7">15.30-16.20</option>
                            <option value="8">16.30-17.20</option>
                            </select>
                        </td>
                        <td><input name="room" defaultValue={room}/></td>
                        <td><input name="lecturer" defaultValue={lecturer} /></td>
                        <td><input name="assistant" defaultValue={assistant}/></td>
                        <td>
                            <button className="btn btn-primary d-inline-flex" onClick={handleSave} > Save </button>
                            <br/>
                            <br/>
                            <button className="btn btn-light d-inline-flex" onClick={() => {setEditMode(false); setName(prevName);}} > Cancel </button>
                            <br/>
                            <br/>
                            <button className="btn btn-light d-inline-flex" onClick={handleDelete} > Delete Course </button>
                        </td>
                        </tr>
                    </>
                )} 
                </tbody>
                </table>    
            </div>
        )  
        
}

export default CoursesPage;/*  */