import React, { Component } from "react";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import '../styles/App.css';

// components
import UserList from './UserList.js';
import AddUser from './AddUser.js';

// apollo client setup
const client = new ApolloClient({
    uri: `http://localhost:3000/`
});

class App extends Component {
    render () {
        return (
            <ApolloProvider client={client}>
	            <div id="main">
	                <h1>My React and GraphQL App!</h1>
                    <UserList />
                    <AddUser />
	            </div>
            </ApolloProvider>
        );
    }
}

export default App;
