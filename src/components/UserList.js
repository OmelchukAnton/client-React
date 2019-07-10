import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { getUserQuery } from '../queries/queries';

// components
import UserDetails from './UserDetails';

class UserList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selected: null
        };
    }

    displayUsers () {
        let data = this.props.data;
        if (data.loading) {
            return (<div> Loading users... </div>);
        } else {
            return data.getTime.map(user => {
                return (
                    <li key={user.id} onClick={(e) => { this.setState({ selected: user.id });}}> { user.username } </li>
                );
            });
        }
    }

    render () {
        return (
            <div id="user-list">
                <h2> User List: </h2>
                <ul>
                    <li> { this.displayUsers() } </li>
                </ul>
                <UserDetails userId={this.state.selected}/>
            </div>
        );
    }
}

export default graphql(getUserQuery)(UserList);
