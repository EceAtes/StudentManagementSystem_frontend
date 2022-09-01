import React, { Component, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Input from "../components/Input";
import { login } from "../api/apis";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import EditPage from "./EditPage";
import Test1 from "./test1";

//value={time}  onChange={this.handleChange}


 const CoursesPage = props => {
    let prevName = "Intro to CS";//databaseden gelecek
    let prevType = "Mandatory";//databaseden gelecek
    let prevCode = "CS101";//databaseden gelecek
    let prevRoom = "AA1";//databaseden gelecek
    let prevTime = "9.30 - 10.20";//databaseden gelecek
    let prevLecturer = "A B";//databaseden gelecek
    let prevAssistant = "None";//databaseden gelecek
    
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

    
    const history = useHistory();
    const handleNewButton = () => history.push('/addcourses');

        console.log(editMode);
        return(
            <div className="container">
                <h1>Courses</h1>
                <br/>
                <button className="btn btn-primary d-inline-flex" onClick={handleNewButton} > Add new course </button>
                <br/>
                <br/>
                <br/>
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
                    <Test1 />
                )}
                {editMode && (
                    <>
                        <tr>
                        <th scope="row"><input name="name" defaultValue={name} onChange={(event) => {setName(event.target.value)}}/>{name}</th>
                        <td> <input name="type" defaultValue={type} onChange={(event) => {setType(event.target.value)}}/></td>
                        <td><input name="code" defaultValue={code}onChange={(event) => {setCode(event.target.value)}} /></td>
                        <td>
                        <select name="time" value={time} onChange={(event) => {setTime(event.target.value); console.log(time);}}>
                            <option value="8.40-9.30">8.40-9.30</option>
                            <option value="9.40-10.30">9.40-10.30</option>
                            <option value="10.40-11.30">10.40-11.30</option>
                            <option value="11.40-12.30">11.40-12.30</option>
                            <option value="13.30-14.20">13.30-14.20</option>
                            <option value="14.30-15.20">14.30-15.20</option>
                            <option value="15.30-16.20">15.30-16.20</option>
                            <option value="16.30-17.20">16.30-17.20</option>
                            </select>
                        </td>
                        <td><input name="room" defaultValue={room} onChange={(event) => {setRoom(event.target.value)}}/></td>
                        <td><input name="lecturer" defaultValue={lecturer} onChange={(event) => {setLecturer(event.target.value)}}/></td>
                        <td><input name="assistant" defaultValue={assistant}onChange={(event) => {setAssistant(event.target.value)}}/></td>
                        <td>
                            <button className="btn btn-primary d-inline-flex" onClick={handleSave} > Save </button>
                            <br/>
                            <br/>
                            <button className="btn btn-light d-inline-flex" onClick={() => {setEditMode(false); setName(prevName); setType(prevType);setCode(prevCode);setTime(prevTime);setRoom(prevRoom);setLecturer(prevLecturer);setAssistant(prevAssistant);}} > Cancel </button>
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