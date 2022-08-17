import React, { Component } from "react";
import { login } from "./api/apis";
import AdminProfile from "./adminPages/AdminProfile";
import StudentProfile from "./studentPages/StudentProfile";



class CurrentUser extends Component{
    state = {
        username: null
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
        const { username, password, accountType } = this.state;
        const creds = {
            username,
            password,
             accountType
        }
        this.setState({
            error: null,
            pending: true
        })
        try{
            await login(creds);
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
        const {username, accountType} = this.props;
        let page;
        if (accountType === "Öğrenci"){  
            page = <StudentProfile {...this.props} username={username}/>
        } else {
            page =  <AdminProfile {...this.props} username={username} />
        }
        
        console.log("current:" + accountType);
        
        return page;
    }
}

export default CurrentUser;