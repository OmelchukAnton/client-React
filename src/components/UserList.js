import React, { Component } from "react";
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getUserQuery = gql`
	{
		getTime {
			username
			date
		}
	}
`;

class UserList extends Component {
    displayUsers () {
        let data = this.props.data;
        if (data.loading) {
            return (<div> Loading users... </div>);
        } else {
            return data.getTime.map(user => {
                return (
                    <li key={user.id}> { user.username } </li>
                );
            });
        }
    }
    render () {
        return (
            <div>
                <ul>
                    <li> { this.displayUsers() } </li>
                </ul>
            </div>
        );
    }
}

export default graphql(getUserQuery)(UserList);
