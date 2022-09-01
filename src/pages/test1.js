import React, { userState} from 'react';
import { getCourses } from "../api/apis";

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
                                <tr>
                                    <td>{course.name}</td>
                                    <td>{course.type}</td>
                                    <td>{course.code}</td>
                                    <td>{course.time}</td>
                                    <td>{course.room}</td>
                                    <td>{course.teacher}</td>
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

