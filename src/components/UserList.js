import React, { Component, useSyncExternalStore } from 'react';
import { getUsers } from '../api/apis';
import UserItems from './UserItems';

class UserList extends Component {

    state = {
        users: []
    }

componentDidMount(){
    getUsers().then( response => {
        this.setState({
            users: response.data.content
        })
        
    })
    
}

render(){
    const { users } = this.state;
    return(
        <div>
                <h2 className='card-header text-center'>Users</h2>
                <div>
                
                    {users.map((user, index) => (
                        <UserItems key={user.username} user={user}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default UserList;