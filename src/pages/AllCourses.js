import React, { userState} from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { getCourses } from "../api/apis";

export default class AllCourses extends React.Component {

    state = {
        courses: []
    }

    componentDidMount(){
        getCourses().then(response => {
            this.setState({
                courses: response.data
            })
            
            //console.log(response.data.content);
        })
    }

    selectTime(courseTime){
        switch (courseTime){
            case 1: return"8.40-9.30";
            case 2: return "9.40-10.30";
            case 3: return "10.40-11.30";
            case 4: return "11.40-12.30";
            case 5: return "13.30-14.20";
            case 6: return "14.30-15.20";
            case 7: return "15.30-16.20";
            case 8: return "16.30-17.20";  
        }
    }

    handleAdd = () => {
        const {push} = this.props.history;
        push('/addcourses');
    }

    handleEdit = () => {
        const {push} = this.props.history;
        push('/editcourse');
    }
    /* tableRows = this.state.courses.map((info) => {
        console.log("entered");
        return (
            <tr>
                <td>{info.name}</td>
                {console.log(info.name)}
                <td>{info.type}</td>
                {console.log(info.type)}
                <td>{info.code}</td>
                {console.log(info.code)}
            </tr>
        );
    }); */

    render(){
        const { courses } = this.state;
        return(
            <>
                <div className="container">
                    <h1>Courses</h1>
                    <br/>
                    <button className="btn btn-primary d-inline-flex" onClick={this.handleAdd}> Add new course </button>
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
                            {courses.map((course) => (
                                <tr key={course.id}>
                                    <td>{course.name}</td>
                                    <td>{course.type}</td>
                                    <td>{course.code}</td>
                                    <td>{this.selectTime(course.time)}</td>
                                    <td>{course.room}</td>
                                    <td>{course.lecturer}</td>
                                    <td>{course.assistant}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>    
                </div>
            </>                
        );
    }
}

/* 
export default class Test1 extends React.Component {

    state = {
        courses: []
    }

    componentDidMount(){
        getCourses().then(response => {
            this.setState({
                courses: response.data
            })
            
            //console.log(response.data.content);
        })
    }

    selectTime(courseTime){
        switch (courseTime){
            case 1: return"8.40-9.30";
            case 2: return "9.40-10.30";
            case 3: return "10.40-11.30";
            case 4: return "11.40-12.30";
            case 5: return "13.30-14.20";
            case 6: return "14.30-15.20";
            case 7: return "15.30-16.20";
            case 8: return "16.30-17.20";  
        }
    }

   handleEdit() {
        useEdit();
   } 
    /* tableRows = this.state.courses.map((info) => {
        console.log("entered");
        return (
            <tr>
                <td>{info.name}</td>
                {console.log(info.name)}
                <td>{info.type}</td>
                {console.log(info.type)}
                <td>{info.code}</td>
                {console.log(info.code)}
            </tr>
        );
    }); */
/*
    render(){
        const { courses } = this.state;
        return(
            <>
                <div className="container">
                    <h1>Courses</h1>
                    <br/>
                    <button className="btn btn-primary d-inline-flex" > Add new course </button>
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
                            {courses.map((course) => (
                                <tr key={course.id}>
                                    <td>{course.name}</td>
                                    <td>{course.type}</td>
                                    <td>{course.code}</td>
                                    <td>{this.selectTime(course.time)}</td>
                                    <td>{course.room}</td>
                                    <td>{course.lecturer}</td>
                                    <td>{course.assistant}</td>
                                    {/* <td><button className="btn btn-sm btn btn-info" onClick={this.handleEdit} >Edit Course</button></td> *//*}
                                </tr>
                            ))}
                        </tbody>
                    </table>    
                </div>
            </>                
        );
    }
}

 */