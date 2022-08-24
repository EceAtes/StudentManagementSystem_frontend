import React, { Component } from "react";


class EditPage extends Component{
    render(){
        const {inEdit} = this.props;
        let page; 
        if(inEdit === false){
        page = (<>
                    <tr>
                    <th scope="row">Intro to CS</th>
                    <td>Mandatory</td>
                    <td>CS101</td>
                    <td>9.30 - 10.20</td>
                    <td>AA1</td>
                    <td>A B</td>
                    <td>None</td>
                    <td>
                        <button className="btn btn-success d-inline-flex" onClick={this.setState({inEdit: true})} > Edit </button>
                    </td>
                    </tr>
                </>)
        } else {
            page = ( <>
            <tr>
            <th scope="row"><input name="name" placeholder="Intro to CS"/></th>
            <td> <input name="type" placeholder="Mandatory" /></td>
            <td><input name="code" placeholder="CS101" /></td>
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
            <td><input name="room" placeholder="AA1"/></td>
            <td><input name="lecturer" placeholder="A B" /></td>
            <td><input name="assistant" placeholder="None"/></td>
            <td>
                <button className="btn btn-primary d-inline-flex" onClick={this.handleSave} > Save </button>
                <br/>
                <br/>
                <button className="btn btn-light d-inline-flex" onClick={() => this.setState({inEdit: false})} > Cancel </button>
                <br/>
                <br/>
                <button className="btn btn-light d-inline-flex" onClick={this.handleDelete} > Delete Course </button>
            </td>
            </tr>
        </>)
        }

        return page;
    }
}

export default EditPage;