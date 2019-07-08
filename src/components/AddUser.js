import React, { Component } from "react";
import { graphql, compose } from 'react-apollo';
import { addDateMutation, getUserQuery } from '../queries/queries';


class AddUser extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            date: ''
        };
    }

    submitForm (e) {
        e.preventDefault();
        this.props.addDateMutation({
            variables: {
                username: this.state.username,
                date: this.state.date
            },
            refetchQueries: [{ query: getUserQuery }]
        });
    }

    render () {
        return (

            <form id="add-date" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label> User name: </label>
                    <input type="text" onChange={(e) => this.setState({ username: e.target.value })} />
                </div>
                <div className="field">
                    <label> Select date </label>
                    <input type="date" onChange={(e) => this.setState({ date: e.target.value })} />
                </div>
                <button> Save User </button>
            </form>

        );
    }
}

export default compose(
    graphql(addDateMutation, { name: "addDateMutation" })
)(AddUser);
