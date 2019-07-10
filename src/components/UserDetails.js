import React, { Component } from "react";
import { graphql } from 'react-apollo';
import { getUserDetailsQuery } from '../queries/queries';

class UserDetails extends Component {
    displayUserDetails () {
        const { getUser } = this.props.data;
        if (getUser) {
            return (
                <div>
                    <h2> {getUser.username} </h2>
                    <p> {getUser.date} </p>
                </div>
            );
        } else {
            return (<div> No user selected </div>);
        }
    }

    render () {
        return (
            <div id="user-details">
                <p> Output User info here: </p>
                {this.displayUserDetails()}

            </div>
        );
    }
}

export default graphql(getUserDetailsQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.userId
            }
        };
    }
})(UserDetails);
