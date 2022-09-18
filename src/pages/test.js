import React, { useState } from "react";
import { getCourses } from "../api/apis";
import Test1 from "./AllCourses";

function Table({theadData, tbodyData}) {
    return (
      <table>
          <thead>
              <tr>
              // header row
              </tr>
          </thead>
          <tbody>
            // body data
          </tbody>
      </table>
    );
  }

  export default function Test() {
    const [courses, setCourses] = useState();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [code, setCode] = useState('');
    const [time, setTime] = useState('');
    const [room, setRoom] = useState('');
    const [lecturer, setLecturer] = useState('');
    const [assistant, setAssistant] = useState('');

    /*const componentDidMount = () => {
        getCourses().then( response => {
            setName(response.data.content.name);
            setCode(response.data.content.code);
            setType(response.data.content.type);
            setTime(response.data.content.time);
            setRoom(response.data.content.room);
            setLecturer(response.data.content.lecturer);
            setAssistant(response.data.content.assistant);         
        });
    };*/
/*

    const tableRows = courses.map((info) => {
            return(
                <tr>
                    <td>{info.name}</td>
                    <td>{info.type}</td>
                    <td>{info.code}</td>
                    <td>{info.time}</td>
                    <td>{info.room}</td>
                    <td>{info.lecturer}</td>
                    <td>{info.assitant}</td>
                </tr>
            );
        });
    

    const addRows = (data) => {
        const totalCourses = courses.length;
        data.id = totalCourses + 1;
        const updatedCourse = [...courses];
        updatedCourse.push(data);
        setCourses(updatedCourse);
    }
*/
  /*  getData = () => {
        getCourses().then( response => {
            this.setState({
                name: response.data.content.name,
                code: response.data.content.code,
                type: response.data.content.type,
                time: response.data.content.time,
                room: response.data.content.room,
                lecturer: response.data.content.lecturer,
                assistant: response.data.content.assistant
            })
        })
    }*/

  /*  render() {
        const {courses} = this.state;*/

        return (
            <div>
                {/* <table className="table table stripped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Code</th>
                            <th>Time</th>
                            <th>Room</th>
                            <th>Teacher</th>
                            <th>Assistant</th>
                        </tr>
                    </thead>
                    <tbody>{tableRows}</tbody>
                </table> */}
                {/*console.log(courses.name)*/}
               {/*  <Test1 func={addRows}/> */}
               <Test1 />
            </div>
        )
    //}
}

