import React, { userState} from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { getCourses } from "../api/apis";

class useEdit {
    handleEdit = () => {
        const {push} = this.props.history;
        push('/editcourse');
    }

    render(){
        {this.handleEdit()}
    }
   
};

export default useEdit;
