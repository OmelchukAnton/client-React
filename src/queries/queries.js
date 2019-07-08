import { gql } from 'apollo-boost';

const getUserQuery = gql`
	{
		getTime {
			id
			username
			date
		}
	}
`;

const addDateMutation = gql`
	mutation($username: String, $date: String) {
		setTime(username: $username, date: $date) {
			username
			id
		}
	}
`;


const getUserDetailsQuery = gql`
	query($id: ID) {
		getUser(id: $id) {
			id
			username
			date
		}
	}
`;

export {
    getUserQuery,
    addDateMutation,
    getUserDetailsQuery
};
